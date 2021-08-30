const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express~'});
}) */

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/any',
          'name': '황용하',
          'birthday': '930907',
          'gender': '남성',
          'job': '대학생'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/any',
          'name': '홍길동',
          'birthday': '910907',
          'gender': '남성',
          'job': '개발자'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/any',
          'name': '홍길동',
          'birthday': '920907',
          'gender': '남성',
          'job': '사업가'
        }
      ]);
})

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));