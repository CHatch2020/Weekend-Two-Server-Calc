$(document).ready(onReady);

function onReady(){
    console.log('These are not the droids you are looking for');
    $('#add').on('click', onAddition);
    $('#subtract').on('click', onSubtraction);
    $('#mult').on('click', onMultiply);
    $('#divide').on('click', onDivision);
    $('#submitInputs').on('click', submitEquations);
}; // end onReady
let operator;
function onAddition(){
    operator = '+';
}; // end onAddition
function onSubtraction(){
    operator = '-';
}; // end onSubtraction
function onMultiply(){
    operator = '*';
}; // end onMultiply
function onDivision(){
    operator = '/';
}; // end onDivision


function submitEquations(){
    let equation = {
        firstNum: $('#firstNum').val(),
        operator: operator,
        secondNum: $('#secondNum').val()
    }; // end equation
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: equation
    }).then((res) => {
        console.log(res);
        getMath();
    }).catch((error) => {
        alert('Error in POST', error);
    })
}; // end submitEquations

function getMath(){
    // get the array to display to DOM
$.ajax({
    method: 'GET',
    url: '/calculation'
}).then((res) => {
    console.log('got a response', res);
    let solution = $('#solutionIn');
    let history = $('#historyIn');
    history.empty();
    // loop array and append the objects
    for (let item of res) {
        history.append(`
        <li>
            ${item.firstNum}
            ${item.operator}
            ${item.secondNum}
            =
            ${item.answer}
        </li>
        `); // end append
        solution.empty();
        solution.append(`
        ${item.answer}
        `)
    }; // end loop
}).catch((error) => {
    alert('error in ajax GET', error);
});
}; // end getMath