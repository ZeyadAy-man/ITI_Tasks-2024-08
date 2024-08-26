var text = "Hello There! I'm Zeyad Ayman etc etc etc...";
var arrayOfText = ["I'm Zeyad Ayman", "21 Years Old", "Software Engineer"];
var features = `width=300,height=300,top=0,left=0,resizable=yes,scrollbars=yes`;
var index = 0;
function openWindow(){
    // childWindow = window.open('', 'child', features);
    interval = setInterval(() =>{
        window.document.write(text.charAt(index));
        index++;
    }, 200)
}
