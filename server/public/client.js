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
        console.log('Math equation created', res);
        
    }).catch((error) => {
        alert('Error in POST', error);
    })
}; // end submitEquations