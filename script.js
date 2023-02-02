console.log("Welcome to spotify")
letsong = [

]
//Initialize the Variables













function playSong(x){


    var audio = document.getElementById('player-song');
    audio.src = `songs/${x}.mp3`
  
    audio.load(); //call this to just preload the audio without playing
    audio.play();

    
}

