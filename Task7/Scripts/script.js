var answerBuffer = "";
var answerInputFullValue = "";
var operator1, num1, num2;
var afterOperator = false;
function EnterNumber(number){
    if(afterOperator){
        answerBuffer = "";
        afterOperator = false;
    }
    answerBuffer += number;
    answerInputFullValue += number;
    document.getElementById('Answer').value = answerBuffer;
    console.log(answerInputFullValue);
}
function EnterOperator(operator){
    answerBuffer += operator;
    answerInputFullValue += operator;
    operator1 = operator;
    afterOperator = true;
    document.getElementById('Answer').value = answerBuffer;
}
function EnterEqual(){
    num1 = parseFloat(answerInputFullValue.split(operator1)[0]);
    num2 = parseFloat(answerInputFullValue.split(operator1)[1]);
    if(operator1 === '*'){
        (isNaN(num1) || isNaN(num2)) ? document.getElementById('Answer').value = 'Syntax Error' : document.getElementById('Answer').value = (num1 * num2);
    }
    else if(operator1 === '/'){
        if(num2 == 0){
            document.getElementById('Answer').value = 'Logical Error';
        }
        else if(isNaN(num1) || isNaN(num2)){
            document.getElementById('Answer').value = 'Syntax Error'
        }
        else{
            document.getElementById('Answer').value = (num1 / num2);
        }
    }
    else if(operator1 === '+'){
        (isNaN(num1) || isNaN(num2)) ? document.getElementById('Answer').value = 'Syntax Error' : document.getElementById('Answer').value = (num1 + num2);
    }
    else if(operator1 === '-'){
        (isNaN(num1) || isNaN(num2)) ? document.getElementById('Answer').value = 'Syntax Error' : document.getElementById('Answer').value = (num1 - num2);  
    }
    operator1 = answerInputFullValue = answerBuffer = "";
    num1 = num2 = 0;
}
function EnterClear(){
    operator1 = answerInputFullValue = answerBuffer = "";
    num1 = num2 = 0;
    document.getElementById('Answer').value = "";
}
function hovering(index){
    document.getElementById(`b${index}`).style.backgroundColor = 'cyan';
}
function outElement(index){
    document.getElementById(`b${index}`).style.backgroundColor = 'rgb(228, 228, 228)';
}