var arrayOfNumbers = [];
for(let i = 0; i < 3; i++){
    arrayOfNumbers[i] = parseInt(prompt(`Enter the ${i + 1} number`));
}
var summation = 0, division = arrayOfNumbers[0], multiplication = 1, subtraction = 0;
function operations(arrayOfNumbers){
    for(let i = 0; i < arrayOfNumbers.length; i++){
        summation += arrayOfNumbers[i];
        subtraction -= arrayOfNumbers[i];
        multiplication *= arrayOfNumbers[i];
    }
}
function divisionOperation(arrayOfNumbers){
    for(let i = 1; i < arrayOfNumbers.length; i++){
        division /= arrayOfNumbers[i];
        console.log(division);
    }
    return division;
}
operations(arrayOfNumbers);
document.write(`<h1 style="color:red">The sum of array is ${summation}</h1>`);
document.write(`<h1 style="color:red">The subtract of array is ${subtraction}</h1>`)
document.write(`<h1 style="color:red">The multiplication of array is ${multiplication}</h1>`)
document.write(`<h1 style="color:red">The division of array is ${divisionOperation(arrayOfNumbers)}</h1>`)