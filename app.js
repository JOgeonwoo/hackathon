const express = require('express');
const app = express();
const session = require('express-session');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
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
  const { nname, username, email, password } = req.body;

  // 비밀번호 암호화
  const hashedPassword = await bcrypt.hash(password, 10);

  // MySQL에 회원 정보 저장
  connection.query(
    'INSERT INTO users (nname, username, email, password, cash) VALUES (?, ?, ?, ?, ?)',
    [nname, username, email, hashedPassword],
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
  res.cookie('username', '', { maxAge: 0, httpOnly: true, domain: 'todate.shop' });
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
        res.cookie('username', username, { maxAge: 3600000, httpOnly: true, domain: 'todate.shop' });
        res.cookie('nname', user.nname, { maxAge: 3600000, httpOnly: true, domain: 'todate.shop' });
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
  const nname = req.cookies.nname;

  // username이 존재하면 홈페이지로 이동
  if (username) {
    res.render('home', { username, nname });
  } else {
    // username이 없으면 로그인 페이지로 이동
    res.redirect('/login');
  }
});

// Step1.css, Step1.js, Step2.css, Step2.js, Step3.css, Step3.js 파일들만 정적 파일로 제공
const staticFiles = [
  'Step1.css',
  'Step1.js',
  'Step2.css',
  'Step2.js',
  'Step3.css',
  'Step3.js',
  'Step4.js'
];

app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    const fileName = path.basename(filePath);
    if (!staticFiles.includes(fileName)) {
      res.setHeader('Content-Type', 'text/html');
    }
  },
  domain: 'todate.shop'
}));

// Step1 페이지 라우팅
app.get('/Step1', (req, res) => {
  res.sendFile(__dirname + '/views/Step1.html');
});

// Step2 페이지 라우팅
app.get('/Step2', (req, res) => {
  res.sendFile(__dirname + '/views/Step2.html');
});

// Step3 페이지 라우팅
app.get('/Step3', (req, res) => {
  res.sendFile(__dirname + '/views/Step3.html');
});

// Recommend 페이지 라우팅
app.get('/Recommend', (req, res) => {
  res.sendFile(__dirname + '/views/Recommend.html');
});

// Step4 페이지 라우트
app.get('/Step4', (req, res) => {
  res.sendFile(__dirname + '/views/Step4.html');
});

// Review 페이지 라우트
app.get('/Review', (req, res) => {
  res.sendFile(__dirname + '/views/review2.html');
});

// saveReview 페이지 라우팅
app.get('/saveReview', (req, res) => {
  res.sendFile(__dirname + '/views/saveReview.html');
});

// "/addCash" 라우트 핸들러
app.post('/addCash', (req, res) => {
  // 로그인한 사용자의 세션에서 cash 값을 가져옴 (사용자 식별은 예시이므로 실제 구현에 맞게 수정 필요)
  const username = req.cookies.username;
  if (!username) {
    return res.status(401).json({ error: '로그인이 필요합니다.' });
  }

  // 요청으로부터 증가시킬 cash 양을 가져옴
  const { amount } = req.body;

  // MySQL에서 해당 사용자의 cash 값을 가져옴
  connection.query(
    'SELECT cash FROM users WHERE username = ?',
    [username],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: '오류가 발생했습니다.' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
      }

      const userCash = results[0].cash || 0;

      // cash 값을 업데이트하고 MySQL에 저장
      const updatedCash = userCash + amount;
      connection.query(
        'UPDATE users SET cash = ? WHERE username = ?',
        [updatedCash, username],
        (err) => {
          if (err) {
            return res.status(500).json({ error: '오류가 발생했습니다.' });
          }

          // 업데이트된 cash 값을 응답으로 보냄 (클라이언트에서 업데이트된 cash를 사용할 수 있도록)
          res.json({ cash: updatedCash });
        }
      );
    }
  );
});

//saveReview 테스트
app.post('/saveReview', async (req, res) => {
  const { userInput, placeName, result } = req.body;

  try {
      // MySQL에 리뷰 데이터 저장
      const insertQuery = `INSERT INTO gptscore (sname, score1) VALUES (?, ?)`;
      const insertValues = [placeName, result];

      connection.query(insertQuery, insertValues, (err, results) => {
          if (err) {
              console.error('MySQL 데이터 삽입 오류:', err);
              res.status(500).json({ message: 'MySQL 데이터 삽입 오류' });
          } else {
              console.log('MySQL에 데이터가 성공적으로 삽입되었습니다.');
              res.status(200).json({ message: '리뷰가 성공적으로 저장되었습니다.' });
          }
      });
  } catch (error) {
      console.error('서버 처리 중 오류 발생:', error);
      res.status(500).json({ message: '서버 처리 중 오류 발생' });
  }
});

// GPT-3 API 호출을 처리할 새로운 라우트 생성
app.post('/generateReview', async (req, res) => {
  const { userInput, placeName } = req.body;

  try {
    const apiKey = 'YOUR_OPENAI_API_KEY_HERE';
    const question = `'${userInput}' 라는 리뷰가 '${placeName}' 이라는 장소와 얼마나 연관이 있다고 생각해? -10-10까지의 정수로 정확하게 점수를 줘. 리뷰가 부정적이라고 생각하면 음수고, 아니면 양수야. 점수 분포가 골고루 될 수 있게 정확히 점수를 주길 바래. 이유 필요없으니까 숫자 하나만 딱 대답해줘`;

    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: question,
        max_tokens: 1500,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const answer = response.data.choices[0].text.trim();
    const result = parseInt(answer);

    // MySQL 데이터베이스에 저장
    const insertQuery = `INSERT INTO gptscore (sname, score1) VALUES (?, ?)`;
    const insertValues = [placeName, result];

    connection.query(insertQuery, insertValues, (err, results) => {
      if (err) {
        console.error('MySQL 데이터 삽입 오류:', err);
        res.status(500).json({ message: 'MySQL 데이터 삽입 오류' });
      } else {
        console.log('MySQL에 데이터가 성공적으로 삽입되었습니다.');
        res.status(200).json({ message: '리뷰가 성공적으로 저장되었습니다.' });
      }
    });
  } catch (error) {
    console.error('GPT-3 API 호출 중 오류 발생:', error.message);
    res.status(500).json({ message: '답변을 생성하는 데에 문제가 발생했습니다.' });
  }
});

// 서버 리스닝
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
