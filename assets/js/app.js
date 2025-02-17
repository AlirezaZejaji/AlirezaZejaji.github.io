// select items
let box_music = document.querySelector(".box-music");
let btn_play = document.querySelector(".play");
let btn_pause = document.querySelector(".pause");
let up_time = document.querySelector(".up-time");
let music1 = document.querySelector(".music1");
let music2 = document.querySelector(".music2");
let btn_volume = document.querySelector(".volume")
let btn_mute = document.querySelector(".mute");
let btn_repeatOff = document.querySelector(".repeat-off");
let btn_repeatOn = document.querySelector(".repeat-on");
let strat_time = document.querySelector(".strat-time");
let end_time = document.querySelector(".end-time");
let body = document.querySelector("body");
let image_music1 = document.querySelector(".img_music1");
let image_music2 = document.querySelector(".img_music2");
let btn_before = document.querySelector(".btn_before");
let btn_next = document.querySelector(".btn_next");
let music_name1 = document.querySelector(".music_name1");
let artist_name1 = document.querySelector(".artist_name1");
let music_name2 = document.querySelector(".music_name2");
let artist_name2 = document.querySelector(".artist_name2");
let progress_bar = document.querySelector(".progress_bar");
let r ;
let time_percentage ;
let music ;
let run ;
let min ;
let second ;

// button next and before music
run = document.querySelector(".run");
music = document.querySelector(".music");
btn_before.addEventListener("click" , function(){
    if(music2.classList == "music2 music"){
        image_music2.classList.add("d-none")
        image_music1.classList.remove("d-none")
        image_music1.classList.add("run")
        image_music2.classList.remove("run")
        music2.classList.remove("music")
        music1.classList.add("music")
        music_name1.classList.remove("d-none")
        artist_name1.classList.remove("d-none")
        music_name2.classList.add("d-none")
        artist_name2.classList.add("d-none")

        music = document.querySelector(".music");

        min = Math.floor(music.duration / 60);
        second = Math.floor(music.duration % 60);
        if(min<10){
            min = "0"+min
        }
        if(second<10){
            second = "0"+second
        }
        end_time.textContent = min + ":" + second ;
        time_percentage = 100 / music.duration;


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
                    m = m + time_percentage
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
                run.classList.add("play")
                btn_play.classList.add("d-none");
                btn_pause.classList.remove("d-none");
            }else{
                btn_play.classList.remove("d-none");
                btn_pause.classList.add("d-none");
                music.pause();
                run.classList.remove("play")
            }
        })
    }else if(music1.classList == "music1 music"){
        image_music2.classList.remove("d-none")
        image_music1.classList.add("d-none")
        image_music1.classList.remove("run")
        image_music2.classList.add("run")
        music1.classList.remove("music")
        music2.classList.add("music")
        music_name1.classList.add("d-none")
        artist_name1.classList.add("d-none")
        music_name2.classList.remove("d-none")
        artist_name2.classList.remove("d-none")
        music = document.querySelector(".music")

        min = Math.floor(music.duration / 60);
        second = Math.floor(music.duration % 60);
        if(min<10){
            min = "0"+min
        }
        if(second<10){
            second = "0"+second
        }
        end_time.textContent = min + ":" + second ;
        time_percentage = 100 / music.duration;

        // time And time bar
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
                    m = m + time_percentage
                }
            }
            strat_time.textContent = min + ":" + second ;
        })

        // repeat music
        music.addEventListener("ended" , function(){
            if(r==true){
                music.play();
                run.classList.add("play");
                btn_play.classList.add("d-none");
            btn_pause.classList.remove("d-none");
            }else{
                music.pause();
                run.classList.remove("play");
                btn_play.classList.remove("d-none");
            btn_pause.classList.add("d-none");
            }
        })
    }
    music = document.querySelector(".music");
    run = document.querySelector(".run");
})
music = document.querySelector(".music");
run = document.querySelector(".run");
btn_next.addEventListener("click" , function(){
    if(music2.classList == "music2 music"){
        image_music2.classList.add("d-none")
        image_music1.classList.remove("d-none")
        image_music1.classList.add("run")
        image_music2.classList.remove("run")
        music2.classList.remove("music")
        music1.classList.add("music")
        music_name1.classList.remove("d-none")
        artist_name1.classList.remove("d-none")
        music_name2.classList.add("d-none")
        artist_name2.classList.add("d-none")

        music = document.querySelector(".music");

        min = Math.floor(music.duration / 60);
        second = Math.floor(music.duration % 60);
        if(min<10){
            min = "0"+min
        }
        if(second<10){
            second = "0"+second
        }
        end_time.textContent = min + ":" + second ;
        time_percentage = 100 / music.duration;


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
                    m = m + time_percentage
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
                run.classList.add("play")
                btn_play.classList.add("d-none");
                btn_pause.classList.remove("d-none");
            }else{
                btn_play.classList.remove("d-none");
                btn_pause.classList.add("d-none");
                music.pause();
                run.classList.remove("play")
            }
        })
    }else if(music1.classList == "music1 music"){
        image_music2.classList.remove("d-none")
        image_music1.classList.add("d-none")
        image_music1.classList.remove("run")
        image_music2.classList.add("run")
        music1.classList.remove("music")
        music2.classList.add("music")
        music_name1.classList.add("d-none")
        artist_name1.classList.add("d-none")
        music_name2.classList.remove("d-none")
        artist_name2.classList.remove("d-none")
        music = document.querySelector(".music")

        min = Math.floor(music.duration / 60);
        second = Math.floor(music.duration % 60);
        if(min<10){
            min = "0"+min
        }
        if(second<10){
            second = "0"+second
        }
        end_time.textContent = min + ":" + second ;
        time_percentage = 100 / music.duration;

        // time And time bar
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
                    m = m + time_percentage
                }
            }
            strat_time.textContent = min + ":" + second ;
        })

        // repeat music
        music.addEventListener("ended" , function(){
            if(r==true){
                music.play();
                run.classList.add("play");
                btn_play.classList.add("d-none");
            btn_pause.classList.remove("d-none");
            }else{
                music.pause();
                run.classList.remove("play");
                btn_play.classList.remove("d-none");
            btn_pause.classList.add("d-none");
            }
        })
    }
    music = document.querySelector(".music");
    run = document.querySelector(".run");
})

// btn play
music.addEventListener("play" , function(){
    run = document.querySelector(".run");
    run.classList.add("play")
    btn_pause.classList.remove("d-none")
    btn_play.classList.add("d-none")
})
btn_play.addEventListener("click" , function(){
    music.play()
    run = document.querySelector(".run");
    run.classList.add("play")
    btn_pause.classList.remove("d-none")
    btn_play.classList.add("d-none")
})

// btn pause
music.addEventListener("pause" , function(){
    run = document.querySelector(".run");
    run.classList.remove("play")
    btn_play.classList.remove("d-none")
    btn_pause.classList.add("d-none")
})
btn_pause.addEventListener("click" , function(){
    music.pause()
    run = document.querySelector(".run");
    run.classList.remove("play")
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
            m = m + time_percentage
        }
    }
    strat_time.textContent = min + ":" + second ;
})

// repeat music
music.addEventListener("ended" , function(){
    run = document.querySelector(".run");
    btn_play.classList.remove("d-none");
    btn_pause.classList.add("d-none");
    if(r==true){
        music.play();
        run.classList.add("play")
        btn_play.classList.add("d-none");
        btn_pause.classList.remove("d-none");
    }else{
        btn_play.classList.remove("d-none");
        btn_pause.classList.add("d-none");
        music.pause();
        run.classList.remove("play")
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

// progress bar time
progress_bar.addEventListener("click" , function(e){
    let clicked_left = e.pageX - progress_bar.getBoundingClientRect().left;
    let wid = progress_bar.getBoundingClientRect().width;
    let amount = clicked_left / wid;

    let sec = music.duration * amount;

    music.currentTime = sec;
})

setInterval(pic, 10000)