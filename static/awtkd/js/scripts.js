// function for transition slides images

let count = 1;
document.getElementById("slide-1").checked = true;

setInterval ( function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count > 2){
        count = 1;
    }

    document.getElementById("mobile-slide0"+count).checked = true;
}

let integer = 1;
document.getElementById("mobile-slide01").checked = true;

setInterval ( function() {
    nextImage();
}, 1000)

function nextImage() {
    integer++;
    if(integer > 2){
        integer = 1;
    }

    document.getElementById("mobile-slide0"+integer).checked = true;
}