function alertMe(){
    alert('I have been clicked');
}
function wolfSpeaking(){
    const audio = new Audio("./sounds/wolf.mp3");
    audio.play();
}
function lionSpeaking(){
    const audio = new Audio("./sounds/lion.mp3");
    audio.play();
}
function elephantSpeaking(){
    const audio = new Audio("./sounds/elephant.mp3");
    audio.play();
}
function crocoSpeaking(){
    const audio = new Audio("./sounds/crocodile.mp3");
    audio.play();
}
const jungleMusicAudio = new Audio("./sounds/junglemusic.mp3");
function playJungleMusic(){
    jungleMusicAudio.play();
}
function pauseJungleMusic(){
    jungleMusicAudio.pause();
}