var string1 = prompt('Enter the string: ');
var isKeySensitive = confirm('Do you want to make it key Sensitive? :');

let string2 = "";

for(let i = string1.length; i >= 0; i--){
    string2 += string1.charAt(i);
}

if(!isKeySensitive){
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
}
(string1 == string2) ? console.log("The string is plaindrome") : console.log("The string is not plaindrome");
alert((string1 == string2) ? "The string is plaindrome" : "The string is not plaindrome");