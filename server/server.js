const app = require('express')();
const cors = require('cors');
const data = require('./data.json');

app.use(cors());

app.get('/play', (_req, res) => {
    const questionId = Math.floor(Math.random()*20 + 1);
    const question = data.filter(question => question.id === questionId);
    res.status(201).send(question.pop());
});

app.listen(8080, console.log('listening on port 8080'));

