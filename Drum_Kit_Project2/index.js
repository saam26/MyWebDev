var numberOfDrumButtons = document.querySelectorAll(".drum").length
for (var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML)
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
    })
}
