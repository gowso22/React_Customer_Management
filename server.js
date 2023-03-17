const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// 고객정보는 클라이언트에서 가지고 있지 않고
// 서버에서 저장되어 있는 정보를 클라이언트 요청에 따라
// 불러와야 하므로 서버에 고객정보 저장
// https://jsonlint.com/ 에서 해당 형식이 json 형식 여부 확인
app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            // 64*64크기의 사진을 아무거나 가져옴
            'image' : 'https://placeimg.com/64/64/any/1',
            'name' : '홍길동',
            'birthday' : '041222',
            'gender' : '남자',
            'job' : '대학생',
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/any/2',
            'name' : '이고잉',
            'birthday' : '991222',
            'gender' : '남자',
            'job' : '교육생',
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/any/3',
            'name' : '이순신',
            'birthday' : '000112',
            'gender' : '남자',
            'job' : '프로그래머',
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));