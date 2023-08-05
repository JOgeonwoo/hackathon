const express = require('express');
const router = express.Router();

// 회원 가입 페이지
router.get('/signup', (req, res) => {
  res.render('signup');
});

// 홈 페이지
router.get('/', (req, res) => {
  const user = req.cookies.user; // 쿠키에서 사용자 이름을 읽어옴
  res.render('home', { user });
});

// 로그아웃 처리
router.post('/logout', (req, res) => {
  res.clearCookie('user'); // 쿠키를 제거함
  res.redirect('/login');
});

module.exports = router;
