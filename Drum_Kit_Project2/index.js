
var i;
// for (i=0;i<6;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }
document.querySelector(".w").addEventListener("click",handleClickw);
document.querySelector(".a").addEventListener("click",handleClicka);
document.querySelector(".b").addEventListener("click",handleClickb);
document.querySelector(".c").addEventListener("click",handleClickc);
document.querySelector(".d").addEventListener("click",handleClickd);
document.querySelector(".e").addEventListener("click",handleClicke);

function handleClickw()
{
    var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/crash.mp3");
    this.style.color="blue";
    audio.play();
};

function handleClicka()
{
    var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/kick-bass.mp3");
    this.style.color="blue";
    audio.play();
};

function handleClickb()
{
    var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/snare.mp3");
    this.style.color="blue";
    audio.play();
};

function handleClickc()
{
    var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/tom-1.mp3");
    this.style.color="blue";
    audio.play();
};

function handleClickd()
{
    var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/tom-2.mp3");
    this.style.color="blue";
    audio.play();
};

function handleClicke()
{
    var audio = new Audio("/Users/samsidsuresh/Web development/Drum Kit Starting Files/sounds/tom-3.mp3");
    this.style.color="blue";
    audio.play();
};

