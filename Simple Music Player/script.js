let progress = document.querySelector("#progress");
let audio = document.querySelector("#audio");
let ctlBtn = document.querySelector(".play");

audio.onloadedmetadata = () => {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

// let playOrPauseAudio = () => {
//     if (ctlBtn.classList.contains)
// }