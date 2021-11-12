$(document).ready(onReady);

function onReady(){
    console.log('These are not the droids you are looking for');
    $('#submitInputs').on('click', submitEquations);
}; // end onReady

function submitEquations(){
    let equation = {
        firstNum: $('#firstNum'),
        secondNum: $('#secondNum')
    };
}; // end submitEquations