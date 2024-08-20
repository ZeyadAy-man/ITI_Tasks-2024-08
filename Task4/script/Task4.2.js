var arrayOfNumbers = [];
for(let i = 0; i < 5; i++){
    arrayOfNumbers[i] = [parseInt(prompt(`Enter the ${i + 1} number`))];
}
var ascendingOrderArray = [];
var descendingOrderArray = [];

function cloningArrays(arrayOfNumbers){
    for(let i = 0; i < arrayOfNumbers.length; i++){
        ascendingOrderArray[i] = arrayOfNumbers[i];
        descendingOrderArray[i] = arrayOfNumbers[i];
    }
}
cloningArrays(arrayOfNumbers);

ascendingOrderArray.sort(function(a, b){
    return a - b;
});
descendingOrderArray.sort(function(a, b){
    return b - a;
});
document.write(`<h2>The ascending array is ${ascendingOrderArray}</h2>`)
document.write(`<h2>The descending array is ${descendingOrderArray}</h2>`)