// select items
let box_music = document.querySelector(".box-music");
let btn_play = document.querySelector(".play");
let btn_pause = document.querySelector(".pause");
let up_time = document.querySelector(".up-time");
let btn_volume = document.querySelector(".volume")
let btn_mute = document.querySelector(".mute");
let btn_repeatOff = document.querySelector(".repeat-off");
let btn_repeatOn = document.querySelector(".repeat-on");
let strat_time = document.querySelector(".strat-time");
let end_time = document.querySelector(".end-time");
let btn_before = document.querySelector(".btn_before");
let btn_next = document.querySelector(".btn_next");
let progress_bar = document.querySelector(".progress_bar");
let progress = document.querySelector(".progress");
let music = document.querySelector(".music");
let img_music = document.querySelector(".img_music");
let music_name = document.querySelector(".music_name");
let artist_name = document.querySelector(".artist_name");
let r ;
let time_percentage ;
let min ;
let second ;

// information music
let songs = [
    {
        "music_name"    : "Negaran mani" ,
        "artist_name"   : "Morteza Pashaei" ,
        "image_music"   : "assets/pic/Negaran Many.png" ,
        "music"         : "assets/music/Negaran mani.mp3"
    }, 
    {
        "music_name"    : "Gole Eshgh" ,
        "artist_name"   : "Reza Bahram" ,
        "image_music"   : "assets/pic/Gole Eshgh.png" ,
        "music"         : "assets/music/Reza Bahram - Gole Eshgh.mp3"
    },
    {
        "music_name"    : "Darya Darya" ,
        "artist_name"   : "Garsha Rezaei" ,
        "image_music"   : "assets/pic/Garsha Rezaei.png" ,
        "music"         : "assets/music/Garsha Rezaei - Darya Darya.mp3"
    }
]

// button next and before music
btn_before.addEventListener("click" , before_music)

btn_next.addEventListener("click" , next_music)

let is_song = 0;
function before_music(){
    is_song--;
    if( is_song < 0 ){
        is_song = (songs.length)-1;
    }

    img_music.src           = songs[is_song]["image_music"]
    music_name.innerHTML    = songs[is_song]["music_name"]
    artist_name.innerHTML   = songs[is_song]["artist_name"]
    music.src               = songs[is_song]["music"]

    img_music.classList.remove("play")
    btn_play.classList.remove("d-none")
    btn_pause.classList.add("d-none")
}
function next_music(){
    is_song++;
    if(is_song == songs.length ){
        is_song = 0;
    }

    img_music.src           = songs[is_song]["image_music"]
    music_name.innerHTML    = songs[is_song]["music_name"]
    artist_name.innerHTML   = songs[is_song]["artist_name"]
    music.src               = songs[is_song]["music"]

    img_music.classList.remove("play")
    btn_play.classList.remove("d-none")
    btn_pause.classList.add("d-none")
}

// btn play
music.addEventListener("play" , function(){
    img_music.classList.add("play")
    btn_pause.classList.remove("d-none")
    btn_play.classList.add("d-none")
})
btn_play.addEventListener("click" , function(){
    music.play()
    img_music.classList.add("play")
    btn_pause.classList.remove("d-none")
    btn_play.classList.add("d-none")
})

// btn pause
music.addEventListener("pause" , function(){
    img_music.classList.remove("play")
    btn_play.classList.remove("d-none")
    btn_pause.classList.add("d-none")
})
btn_pause.addEventListener("click" , function(){
    music.pause()
    img_music.classList.remove("play")
    btn_play.classList.remove("d-none")
    btn_pause.classList.add("d-none")
})

// btn volume
btn_volume.addEventListener("click" , function(){
    music.volume = 0;
    music.muted = true;
    btn_mute.classList.remove("d-none");
    btn_volume.classList.add("d-none");
});

// btn mute
btn_mute.addEventListener("click" , function(){
    music.volume = 1;
    music.muted = false;
    btn_mute.classList.add("d-none");
    btn_volume.classList.remove("d-none");
});
music.addEventListener("volumechange" , function(){
    if(music.muted == true || music.volume == 0){
        btn_mute.classList.remove("d-none");
        btn_volume.classList.add("d-none");
    }else if(music.muted == false || music.volume == 1){
        btn_mute.classList.add("d-none");
        btn_volume.classList.remove("d-none");
    }
});

// btn repeat Off
btn_repeatOff.addEventListener("click" , function(){
    btn_repeatOn.classList.remove("d-none");
    btn_repeatOff.classList.add("d-none");
    r = true;
})

// btn repeat On
btn_repeatOn.addEventListener("click" , function(){
    btn_repeatOff.classList.remove("d-none");
    btn_repeatOn.classList.add("d-none");
    r = false;
})

// end time
music.addEventListener("loadedmetadata" , function(){
    time_percentage = 100 / music.duration;
    min = Math.floor(music.duration / 60);
    second = Math.floor(music.duration % 60);
    if(min<10){
        min = "0"+min
    }
    if(second<10){
        second = "0"+second
    }
    end_time.textContent = min + ":" + second ;

    // progress load
    progress.classList.add("d-none");
    progress_bar.classList.remove("d-none");
})

// start time And time bar
music.addEventListener("timeupdate" , time_update)
function time_update(){
    let min = Math.floor(music.currentTime / 60);
    let second = Math.floor(music.currentTime % 60);
    if(min<10){
        min = "0"+min
    }
    if(second<10){
        second = "0"+second
    }
    let m = 0 ;
    for(let i = 0 ; i<music.currentTime ; i++){
        if(music.currentTime>i){
            up_time.style.width = `${m}%`
            m = m + time_percentage
        }
    }
    strat_time.textContent = min + ":" + second ;
}

// repeat music
music.addEventListener("ended" , repeat)
function repeat(){
    btn_play.classList.remove("d-none");
    btn_pause.classList.add("d-none");
    if(r==true){
        music.play();
        img_music.classList.add("play")
        btn_play.classList.add("d-none");
        btn_pause.classList.remove("d-none");
    }else{
        next_music();
        music.play();
    }
}

// progress bar time
progress_bar.addEventListener("click" , function(e){
    let clicked_left = e.pageX - progress_bar.getBoundingClientRect().left;
    let wid = progress_bar.getBoundingClientRect().width;
    let amount = clicked_left / wid;

    let sec = music.duration * amount;

    music.currentTime = sec;
})