let circleRadius = parseInt(prompt("What is the value of your circles radius?"));
let areaOfCircle = Math.PI * circleRadius * circleRadius;
alert(`Total area of the circle is ${areaOfCircle}`);
let number = parseInt(prompt("What is the value you want to calculate square root?"));
alert(`Square root of ${number} is ${Math.sqrt(number)}`);
let angle = parseInt(prompt("What is the angle you want to calculate its cosine value?"));
document.write(`cos ${angle} is ${Math.round(Math.cos((Math.PI / 180) * (angle)))}`);
