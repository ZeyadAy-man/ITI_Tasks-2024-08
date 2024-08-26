// The marbles automatically change
// The marbles stop changing when i hover on them
// When i leave cursor from marbles it's continue
const currentImageSource = '../images/674047.png';
const defaultImageSource = '../images/1712701.png';
var images = document.getElementsByTagName('img');
var index = 0;
function defaultMovement(){
    interval = setInterval(() => {
        if(index == images.length){
            index = 0;
        }
        images[index].src = currentImageSource;
        for(let i = 0; i < images.length; i++){
            if(i != index){
                images[i].src = defaultImageSource;
            }
        }
        index++;
    }, 1000);
}
function stopMovement(){
    for(let i = 0; i < images.length; i++){
        images[i].onmouseover = function(){
            clearInterval(interval);
        }
    }
}
function continueMovement(){
    for(let i = 0; i < images.length; i++){
        images[i].onmouseout = function(){
            defaultMovement();
        }
    }
}
stopMovement();
defaultMovement();
continueMovement();