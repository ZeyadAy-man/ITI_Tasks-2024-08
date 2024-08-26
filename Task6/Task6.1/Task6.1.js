const arrayOfImages = [
    '../images/chrysanthemum-8430098_1280.jpg',
    '../images/flower-7861942_1280.jpg',
    '../images/summer-8848728_1280.jpg',
    '../images/moon-8915326_1280.png'
];
var index = 0;
var interval;
function nextButtonImplementation(){
    (index === arrayOfImages.length - 1) ? index = 0: index++;
    document.getElementById('imageSlider').src = arrayOfImages[index];
}
function previousButtonImplementation(){
    (index === 0) ? index = arrayOfImages.length - 1: index--;
    document.getElementById('imageSlider').src = arrayOfImages[index];
}
function stopButtonImplementation(){
    clearInterval(interval);
}
function slideShowButtonImplementation(){
    interval = setInterval(() => {
        (index === arrayOfImages.length - 1) ? index = 0: index++;
        document.getElementById('imageSlider').src = arrayOfImages[index];
    }, 2000);
}