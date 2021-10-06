const musicContainer = document.getElementById('music-container'),
    playBtn = document.getElementById('play'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),

    audio = document.getElementById('audio'),
    progress = document.getElementById('progress'),
    progressContainer = document.getElementById('progress-container'),
    title = document.getElementById('title'),
    cover = document.getElementById('cover');


const songs = ['blueDanub', 'HungarianRhapsody', 'SlavonicDance']

let sonngIndex = 2;
loadSong(songs[sonngIndex]);

function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `image/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    
    audio.play();
}

// check .....
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function pervSong() {
    sonngIndex--;

    if (sonngIndex < 0){
        sonngIndex = songs.length - 1;
    }

    loadSong(songs[sonngIndex]);

    playSong();
}


function nextSong(){
    sonngIndex++;

    if (sonngIndex > songs.length - 1 ){
        sonngIndex = 0;
    }

    loadSong(songs[sonngIndex]);

    playSong();
}


function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width= `${progressPercent}%`;
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.suration;

    audio.currentTime = (clickX / width) * duration;
}


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying){
        pauseSong();
    } else {
        playSong();
    }
});


prevBtn.addEventListener('click', pervSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate',updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended',nextSong);
