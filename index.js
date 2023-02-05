
var bln = document.querySelectorAll(".drum").length;
for (var i = 0; i < bln; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var ButtonInnerHTML = this.innerHTML;
        animation(ButtonInnerHTML);
        makesound(ButtonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    animation(event.key);
    makesound(event.key);


})


function animation(currentkey) {

    var activekey = document.querySelector("." + currentkey);
    activekey.classList.add("pressed");
    setTimeout(function () {
        activekey.classList.remove("pressed");
    }, 100);
}





function makesound(ButtonInnerHTML) {


    switch (ButtonInnerHTML) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            woki

            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}