const video = document.getElementById('video'),
    play = document.getElementById('play'),
    stop = document.getElementById('stop'),
    progress = document.getElementById('progress'),
    timestamp = document.getElementById('timestamp');



// play & Pause
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

// Update play button Style
function updatePlayIcon(){
    if (video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// Update Progress Bar
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    //Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    //Get Secounds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;

}

// Set Video Progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100
}

//stop btn
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}



// Event Listners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click',stopVideo);

progress.addEventListener('change',setVideoProgress);