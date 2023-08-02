var numberOfDrumButtons = document.querySelectorAll(".drum").length
for (var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event)
{
    makesound(event.key);
});


function makesound(key)
{
    switch(key)
    {
        case "w":
            var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/kick-bass.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/snare.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/tom-2.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/tom-3.mp3");
            audio.play();
            break;
    }
};


function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150
    );
};



