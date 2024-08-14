var userString = prompt("Enter the text: ");

for(let i = 1; i <= 6; i++){
    document.write(`<h${i}>${userString} ${i}</h${i}> <br><br>`);
}