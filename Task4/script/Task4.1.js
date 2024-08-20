var arrayOfNumbers = [];
for(let i = 0; i < 3; i++){
    arrayOfNumbers[i] = parseInt(prompt(`Enter the ${i + 1} number`));
}
function sumOfArray(arrayOfNumbers){
    let initialValue = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++){
        initialValue += arrayOfNumbers[i];
    }
    return initialValue;
}
function divisionOfArray(arrayOfNumbers){
    let initialValue = 1;
    for(let i = 0; i < arrayOfNumbers.length; i++){
        initialValue /= arrayOfNumbers[i];
    }
    return initialValue;
}
function multiplicationOfArray(arrayOfNumbers){
    let initialValue = 1;
    for(let i = 0; i < arrayOfNumbers.length; i++){
        initialValue *= arrayOfNumbers[i];
    }
    return initialValue;
}
function subtractOfArray(arrayOfNumbers){
    let initialValue = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++){
        initialValue -= arrayOfNumbers[i];
    }
    return initialValue;
}
document.write(`<h1 style="color:red">The sum of array is ${sumOfArray(arrayOfNumbers)}</h1>`);
document.write(`<h1 style="color:red">The subtract of array is ${subtractOfArray(arrayOfNumbers)}</h1>`)
document.write(`<h1 style="color:red">The multiplication of array is ${multiplicationOfArray(arrayOfNumbers)}</h1>`)
document.write(`<h1 style="color:red">The division of array is ${divisionOfArray(arrayOfNumbers)}</h1>`)