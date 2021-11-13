let mathProblem = [];

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.get('/calculation', (req, res) => {
    console.log('in get /calculation');
    solveEquation();
    res.send(mathProblem);
}); // end get

app.post('/calculation', (req, res) => {
    console.log('in post /calculation');
    mathProblem.push(req.body);
    console.log(mathProblem);
    res.sendStatus(201);
}); // end post


function solveEquation(){
    for (let items of mathProblem) {
        if (items.operator === '+') {
            items.answer = Number(items.firstNum) + Number(items.secondNum);
        } else if(items.operator === '-') {
            items.answer = Number(items.firstNum) - Number(items.secondNum);
        } else if(items.operator === '*') {
            items.answer = Number(items.firstNum) * Number(items.secondNum);
        } else if(items.operator === '/') {
            items.answer = Number(items.firstNum) / Number(items.secondNum);
        }
    }; // end loop
}; // end solveEquation




app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
}); // end listen