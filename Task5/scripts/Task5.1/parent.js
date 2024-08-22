var childWindow;
var features = `width=300,height=300,top=0,left=0,resizable=yes,scrollbars=yes`;
var switcher = true;
var interval;
var y = 0;
function openWindow(){
    childWindow = window.open('', 'child', features);
    interval = setInterval(() =>{
        if(y + 400 >= window.outerHeight){
            switcher = true;
        }
        else if(y <= 0){
            switcher = false;
        }
        (switcher) ? y -= 8 : y += 8;
        childWindow.moveTo(0, y);
        childWindow.focus();
    }, 200)
}

function stop(){
    clearInterval(interval);
    childWindow.focus();
}