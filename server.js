const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: '나는 코딩 뚜벅이'});
});

app.listen(port, () => console.log(`서버 구동 됐어! ${port}`));