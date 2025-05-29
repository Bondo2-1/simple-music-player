const songs = [
    {
        title: '2002',
        artist: 'samar tarik',
        cover: 'resources/cover-1.jpg',
        file: 'resources/2002.mp3'
    },
    {
        title: 'Wlad El Shams',
        artist: 'Essam Sasa',
        cover: 'resources/cover-2.jpg',
        file: 'resources/shams.mp3'
    },
    {
        title: 'Ana Meen',
        artist: 'Zad',
        cover: 'resources/cover-3.jpg',
        file: 'resources/Ana-meen.mp3'
    },
    {
        title: 'وحش',
        artist: 'Muslim',
        cover: 'resources/cover-4.jpg',
        file: 'resources/whsh.mp3'
    },
    {
        title: 'انا المميز',
        artist: 'Muslim',
        cover: 'resources/cover-5.jpg',
    }
]
let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();

// DOM Elements
const playPauseBtn = document.querySelector('.play-pause');
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const playIcon = document.querySelector('.play');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');
const coverImg = document.getElementById('cover');
const songTitleEl = document.querySelector('.song-title');
const artistEl = document.querySelector('.artist');

// Initialize the player
function initPlayer() {
    loadSong(songs[currentSongIndex]);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('ended', nextSong);
}

// Load song details
function loadSong(song) {
    coverImg.src = song.cover;
    songTitleEl.textContent = song.title;
    artistEl.textContent = song.artist;
    audio.src = song.file;
}

// Play/Pause
function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playSong() {
    isPlaying = true;
    playIcon.src = 'resources/Stop_and_play_fill_reverse.svg';
    audio.play();
}

function pauseSong() {
    isPlaying = false;
    playIcon.src = 'resources/Play_fill.svg';
    audio.pause();
}

// Previous song
function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    if (isPlaying) {
        playSong();
    }
}

// Next song
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    if (isPlaying) {
        playSong();
    }
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Event listeners
playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
progressBar.addEventListener('click', setProgress);

// Initialize the player
initPlayer(); 