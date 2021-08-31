const express = require('express')
const fs = require('fs'); // 파일을 접근할수 있는 라이브러리
const app = express();
const PORT = process.env.PORT || 5000;

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection) {

}
connection.connect();


/* app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express~'});
}) */

// 클라이언트가 /api/customers에 접속하게되면
app.get('/api/customers', (req, res) => {
  // 클라이언트에게 데이터를 반환
  // res.send([
  //     {
  //       'id': 1,
  //       'image': 'https://placeimg.com/64/64/1',
  //       'name': '황용하',
  //       'birthday': '930907',
  //       'gender': '남성',
  //       'job': '대학생'
  //     },
  //     {
  //       'id': 2,
  //       'image': 'https://placeimg.com/64/64/2',
  //       'name': '홍길동',
  //       'birthday': '910907',
  //       'gender': '남성',
  //       'job': '개발자'
  //     },
  //     {
  //       'id': 3,
  //       'image': 'https://placeimg.com/64/64/3',
  //       'name': '홍길동',
  //       'birthday': '920907',
  //       'gender': '남성',
  //       'job': '사업가'
  //     }
  //   ]);
  

})
connection.query(
  "SELECT * FROM CUSTOMER",
  (err, rows, fields) => {
    res.send(rows);
  }
)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));