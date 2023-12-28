const express = require('express');
const app = express();
const port = 3000;

// http method 중 ged으로 host:port를 보내면 실행되는 라우트
app.get('/', (req, res) => {
    res.send('hello, world');
});

app.listen(port, () => {
    console.log(`${port} 포트가 실행됩니다.`);
})

