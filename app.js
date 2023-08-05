const express = require('express');
const app = express();
const session = require('express-session');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const path = require('path');
const cookieParser = require('cookie-parser'); // 쿠키 파서 추가

// .env 파일 로드
dotenv.config();

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// 쿠키 파서 설정
app.use(cookieParser()); // 쿠키 파서 설정

// 세션 설정
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

// Body Parser 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 뷰 엔진 설정
app.set('view engine', 'ejs'); // EJS 뷰 엔진 설정
app.set('views', __dirname + '/views'); // 뷰 파일 위치 설정

// 회원가입 페이지 라우팅
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/signup.html');
});

// 회원가입 처리
app.post('/signup', async (req, res) => {
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

// 로그인 페이지 라우팅
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

// 로그인 처리
app.post('/login', async (req, res) => {
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
        // 쿠키에 username을 저장
        res.cookie('username', username, { maxAge: 3600000, httpOnly: true });
        res.redirect('/');
      } else {
        // 비밀번호 틀림
        res.send('아이디 혹은 비밀번호를 잘못 입력하셨습니다.');
      }
    }
  );
});

// 홈 페이지 라우팅
app.get('/', (req, res) => {
  // 쿠키에서 username을 가져옴
  const username = req.cookies.username;

  // username이 존재하면 홈페이지로 이동
  if (username) {
    res.render('home', { username });
  } else {
    // username이 없으면 로그인 페이지로 이동
    res.redirect('/login');
  }
});

app.use('/static', express.static(path.join(__dirname, 'homecss')));

// 서버 리스닝
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
