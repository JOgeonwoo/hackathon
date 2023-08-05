const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// .env 파일 로드
dotenv.config();

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// 회원가입 처리
router.post('/signup', async (req, res) => {
  const { name, username, email, password } = req.body;

  // 비밀번호 암호화
  const hashedPassword = await bcrypt.hash(password, 10);

  // MySQL에 회원 정보 저장
  connection.query(
    'INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)',
    [name, username, email, hashedPassword],
    (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          // 중복된 아이디 처리
          return res.send('중복되는 아이디입니다!');
        }
        return res.send('오류가 발생했습니다.');
      }

      // 성공적으로 회원 가입 후 로그인 페이지로 이동
      res.redirect('/login');
    }
  );
});

// 로그인 처리
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // MySQL에서 해당 아이디로 사용자 정보 찾기
  connection.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    async (err, results) => {
      if (err) {
        return res.send('오류가 발생했습니다.');
      }

      if (results.length === 0) {
        return res.send('회원 가입 정보가 없습니다.');
      }

      const user = results[0];
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        // 로그인 성공
        // 쿠키에 사용자 이름 저장
        res.cookie('user', user.name, { maxAge: 3600000 }); // 쿠키의 유효기간을 1시간으로 설정 (설정하지 않으면 브라우저를 닫을 때 쿠키가 삭제됨)
        res.redirect('/');
      } else {
        // 비밀번호 틀림
        res.send('아이디 혹은 비밀번호를 잘못 입력하셨습니다.');
      }
    }
  );
});

module.exports = router;
