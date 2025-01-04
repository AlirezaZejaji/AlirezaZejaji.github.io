// select items
let box_music = document.querySelector(".box-music");
let btn_play = document.querySelector(".play");
let btn_pause = document.querySelector(".pause");
let up_time = document.querySelector(".up-time");
let music = document.querySelector(".music");
let btn_volume = document.querySelector(".volume")
let btn_mute = document.querySelector(".mute");
let btn_repeatOff = document.querySelector(".repeat-off");
let btn_repeatOn = document.querySelector(".repeat-on");
let strat_time = document.querySelector(".strat-time");
let end_time = document.querySelector(".end-time");
let body = document.querySelector("body");
let image_music = document.querySelector(".img");
let r ;

// btn play
music.addEventListener("play" , function(){
    btn_pause.classList.remove("d-none")
    btn_play.classList.add("d-none")
})
btn_play.addEventListener("click" , function(){
    music.play()
    image_music.classList.add("play")
})

// btn pause
music.addEventListener("pause" , function(){
    btn_play.classList.remove("d-none")
    btn_pause.classList.add("d-none")
})
btn_pause.addEventListener("click" , function(){
    music.pause()
    image_music.classList.remove("play")
})

// btn volume
btn_volume.addEventListener("click" , function(){
    music.volume = 0;
    music.muted = true;
});

// btn mute
btn_mute.addEventListener("click" , function(){
    music.volume = 1;
    music.muted = false;
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
    let min = Math.floor(music.duration / 60);
    let second = Math.floor(music.duration % 60);
    if(min<10){
        min = "0"+min
    }
    if(second<10){
        second = "0"+second
    }
    end_time.textContent = min + ":" + second ;
})

// start time And time bar
music.addEventListener("timeupdate" , function(){
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
            m = m + 0.433045814
        }
    }
    strat_time.textContent = min + ":" + second ;
})

// repeat music
music.addEventListener("ended" , function(){
    btn_play.classList.remove("d-none");
    btn_pause.classList.add("d-none");
    if(r==true){
        music.play();
        image_music.classList.add("play")
    }else{
        music.pause();
        image_music.classList.remove("play")
    }
})

// slider
function pic(){
    if(body.classList=="pic1"){
        body.classList.add("pic2");
        body.classList.remove("pic1");
    }else if(body.classList=="pic2"){
        body.classList.add("pic3");
        body.classList.remove("pic2");
    }else if(body.classList=="pic3"){
        body.classList.add("pic4");
        body.classList.remove("pic3");
    }else if(body.classList=="pic4"){
        body.classList.add("pic5");
        body.classList.remove("pic4");
    }else if(body.classList=="pic5"){
        body.classList.add("pic1");
        body.classList.remove("pic5");
    }
}

setInterval(pic, 10000)