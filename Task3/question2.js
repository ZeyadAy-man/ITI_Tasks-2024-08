let sum = 0;
let i = 0;

while(true){
    let userInput = prompt(`Enter number ${i + 1}`);
    sum += parseInt(userInput);
    if(isNaN(userInput) || userInput == 0 || sum >= 100){
        break;
    }
    i++;
}
alert("The sum is " + sum);
console.log("The sum is " + sum);