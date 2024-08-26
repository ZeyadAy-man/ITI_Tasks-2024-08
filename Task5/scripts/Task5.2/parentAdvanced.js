var arrayOfText = ["I'm Zeyad Ayman", "21 Years Old", "Software Engineer", "Computer science student"];
var index = 0;
var subString = "";
var deleteIndex;
var i = 0;
function repeatStatement(time, i){
    interval = setInterval(() => {
        if(i == arrayOfText.length){
            i = 0;
        }
        newStatement(time, i);
        i++
    }, time * 2);
}
function newStatement(time, i){
    var subString = "";
    var index = 0;
    interval1 = setInterval(() => {
        subString += arrayOfText[i].charAt(index);
        window.document.getElementById('text').textContent = subString;
        index++;
        if(index === arrayOfText[i].length){
            clearInterval(interval1);
            deleteStatement(time, i);
        }
    },  time / arrayOfText[i].length);
}
function deleteStatement(time, i){
    var deleteIndex = arrayOfText[i].length;
    interval2 = setInterval(() => {
        if(deleteIndex == 0){
            clearInterval(interval2);
        }
        window.document.getElementById('text').textContent = arrayOfText[i].substring(0, deleteIndex);
        deleteIndex--;
    }, time / (arrayOfText[i].length * 2))
}
function writeAllStatements(time, divID){
    repeatStatement(time, i, divID);
}
writeAllStatements(2000);
// writeAllStatements(3000);