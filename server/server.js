let mathProblem = [];

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.get('/calculation', (req, res) => {
    console.log('in get /calculation');
    res.send('hello');
}); // end get

app.post('/calculation', (req, res) => {
    console.log('in post /calculation');
    mathProblem.push(req.body);
    console.log(mathProblem);
    res.sendStatus(201);
}); // end post





app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
}); // end listen