const player_song = document.getElementById('player');
const $player = document.querySelector('.player');
let time_interval;


//* Functions to time of current song
const $player_time = document.getElementById('current_time');
function setTiming(){
    let time_formated = (player_song.currentTime/60).toFixed(2);
    $player_time.innerHTML = time_formated.padStart(5, '0').replace('.',':');
}

//* Functions to play/pause
function setPlayPauseState(id) {
    const status = document.getElementById(id).checked;
    switch (status){
        case false:
            player_song.play();
            time_interval = setInterval(setTiming,900);
            break;
        case true:
            player_song.pause();
            clearInterval(time_interval);
            break;
    }
}

//+ Start the song
player_song.play();
time_interval = setInterval(setTiming,900);


