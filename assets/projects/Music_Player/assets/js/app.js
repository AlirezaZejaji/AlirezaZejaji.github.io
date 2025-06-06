// select items
let box_music       = document.querySelector(".box-music");
let btn_play        = document.querySelector(".play");
let btn_pause       = document.querySelector(".pause");
let up_time         = document.querySelector(".up-time");
let btn_volume      = document.querySelector(".volume")
let btn_mute        = document.querySelector(".mute");
let btn_repeatOff   = document.querySelector(".repeat-off");
let btn_repeatOn    = document.querySelector(".repeat-on");
let btn_rand_playOff= document.querySelector(".rand_play_off");
let btn_rand_playOn = document.querySelector(".rand_play_on");
let strat_time      = document.querySelector(".strat-time");
let end_time        = document.querySelector(".end-time");
let btn_before      = document.querySelector(".btn_before");
let btn_next        = document.querySelector(".btn_next");
let progress_bar    = document.querySelector(".progress_bar");
let progress        = document.querySelector(".progress");
let music           = document.querySelector(".music");
let img_music       = document.querySelector(".img_music");
let music_name      = document.querySelector(".music_name");
let artist_name     = document.querySelector(".artist_name");
let btn_add_music   = document.querySelector(".btn_add_music");
let inp_music_name  = document.querySelector(".inp_music_name");
let inp_artist_name = document.querySelector(".inp_artist_name");
let inp_music       = document.querySelector(".inp_music");
let add_card        = document.querySelector(".add_card");
let r ;
let time_percentage ;
let min ;
let second ;

// information music
let songs = [
    {
        "music_name"    : "Negaran Mani" ,
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
        "music_name"    : "Ghaf" ,
        "artist_name"   : "Alireza Talischi" ,
        "image_music"   : "assets/pic/Alireza Talischi.png" ,
        "music"         : "assets/music/Alireza Talischi - Ghaf.mp3"
    },
    {
        "music_name"    : "Darya Darya" ,
        "artist_name"   : "Garsha Rezaei" ,
        "image_music"   : "assets/pic/Garsha Rezaei.png" ,
        "music"         : "assets/music/Garsha Rezaei - Darya Darya.mp3"
    }
]

// play list
let items = document.querySelector(".items");
let n = 0;
songs.forEach(function(item){
    // show music in play list
    let div = document.createElement("div");
    div.className = `item item_${n} btn btn-outline-warning mb-3`
    div.setAttribute("data-bs-dismiss" , "offcanvas");
    div.innerHTML =`
    <div class="pic_music w-25">
        <img src="${item["image_music"]}" alt="picture">
    </div>
    <div class="info_music ps-3 w-50">
        <h5>${item["music_name"]}</h5>
        <span class = "fw-normal">${item["artist_name"]}</span>
    </div>
    `

    // add music in play list
    items.append(div);

    // Play music from a playlist
    div.addEventListener("click" , function(){
        img_music.classList.remove("play")
        btn_play.classList.remove("d-none")
        btn_pause.classList.add("d-none")

        // music changed
        img_music.src           = item["image_music"]
        music_name.innerHTML    = item["music_name"]
        artist_name.innerHTML   = item["artist_name"]
        music.src               = item["music"]

        // create alert
        swal("Successful change!", "The music has changed", "success");
    })

    n++;
})

// add music
// get info music
function loadFile(input) {
    let file = input.files[0];
    let url = file.urn || file.name;

    ID3.loadTags(url, function () {
        showTags(url);
    }, {
        tags: ["title", "artist", "picture"],
        dataReader: ID3.FileAPIReader(file)
    });
}
let music_cover_src;
let card_music = document.createElement("div");
function showTags(url) {
    let tags = ID3.getAllTags(url);
    inp_music_name.value  = tags.title || "unknown";
    inp_artist_name.value = tags.artist || "unknown";

    let image = tags.picture;
    if (image) {
        let base64String = "";
        for (let i = 0; i < image.data.length; i++) {
            base64String += String.fromCharCode(image.data[i]);
        }
        let base64 = "data:" + image.format + ";base64," + window.btoa(base64String);
        music_cover_src = base64;
    } else {
        music_cover_src = "assets/pic/disck.webp";
    }

    card_music.className = `item card_music btn btn-outline-warning mb-3`
    card_music.style.cursor = "default";
    card_music.innerHTML =`
    <div class="pic_music w-25">
        <img src="${music_cover_src}" alt="picture">
    </div>
    <div class="info_music ps-3 w-50">
        <h5 class="n_music">${inp_music_name.value}</h5>
        <span class = " n_artist fw-normal">${inp_artist_name.value}</span>
    </div>
    `
    add_card.append(card_music);
}

// change textContent info music

inp_music_name.addEventListener("input" , change);
inp_artist_name.addEventListener("input" , change);
function change(){
    if(document.querySelector(".n_music")){
        document.querySelector(".n_music").textContent = inp_music_name.value;
        document.querySelector(".n_artist").textContent = inp_artist_name.value;
    }
}
// add music in list
btn_add_music.addEventListener("click" , function(){
    let inp_music_name_value    = inp_music_name.value;
    let inp_artist_name_value   = inp_artist_name.value;
    let inp_music_value         = inp_music.files[0];
    
    // info music
    let add_music = {
        "music_name"    : inp_music_name_value ,
        "artist_name"   : inp_artist_name_value ,
        "image_music"   : music_cover_src ,
        "music"         : ""
    }

    if( inp_music.value != "" ){
        // get music
        let fReader_music = new FileReader();
        fReader_music.readAsDataURL(inp_music_value);
        fReader_music.onloadend = function(event){
            let music = event.target.result;
            add_music.music = music;
        }

        // add music in information musics
        songs.push(add_music);

        // show music in play list
        let div = document.createElement("div");
        div.className = `item item_${n} btn btn-outline-warning mb-3`
        div.setAttribute("data-bs-dismiss" , "offcanvas")
        div.innerHTML =`
        <div class="pic_music w-25">
            <img src="${add_music["image_music"]}" alt="picture">
        </div>
        <div class="info_music ps-3 w-50">
            <h5>${add_music["music_name"]}</h5>
            <span class = "fw-normal">${add_music["artist_name"]}</span>
        </div>
        `

        // add music in play list
        items.append(div);
        // create alert success
        swal("Successful add!", "The music has added", "success");

        // Play music from a playlist
        div.addEventListener("click" , function(){
            img_music.classList.remove("play")
            btn_play.classList.remove("d-none")
            btn_pause.classList.add("d-none")

            // music changed
            img_music.src           = add_music["image_music"]
            music_name.innerHTML    = add_music["music_name"]
            artist_name.innerHTML   = add_music["artist_name"]
            music.src               = add_music["music"]

            // create alert success
            swal("Successful change!", "The music has changed", "success");
        })

        // refresh value
        inp_music_name.value    = "";
        inp_artist_name.value   = "";
        inp_music.value         = "";
        let card_music = document.querySelector(".card_music");
        card_music.remove();

        // random music
        if( rand_on == true ){
            random_music_on()
        }

    }else{
        // create alert warning
        swal("Warning", "Please add music", "warning");
    }
})

// button next and before music
btn_before.addEventListener("click" , before_music)
btn_next.addEventListener("click" , next_music)

let is_song = 0;
let rand_on = false;
// btn random paly on
btn_rand_playOff.addEventListener("click" , random_music_on)
function random_music_on(){
    btn_rand_playOff.classList.add("d-none");
    btn_rand_playOn.classList.remove("d-none");
    
    is_song = Math.random() * songs.length;
    is_song = Math.floor(is_song);
    rand_on = true;
    return is_song;
}
// btn random paly off
btn_rand_playOn.addEventListener("click" , function(){
    btn_rand_playOff.classList.remove("d-none");
    btn_rand_playOn.classList.add("d-none");

    rand_on = false;
})

// btn before
function before_music(){
    // random music
    if( rand_on == true ){
        random_music_on()
    }else{
        is_song--;
    }

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
// btn next
function next_music(){
    // random music
    if( rand_on == true ){
        random_music_on()
    }else{
        is_song++;
    }

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
    let percentage = (music.currentTime / music.duration) * 100;
    up_time.style.width = `${percentage}%`;

    strat_time.textContent = min + ":" + second ;
}

// repeat music
music.addEventListener("ended" , repeat)
function repeat(){
    btn_play.classList.remove("d-none");
    btn_pause.classList.add("d-none");
    if(r===true){
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