// Selection et écoute des clics sur la les menus de la navbar pour diriger le scroll en vertical

const stayNav = document.querySelector(".stay");
const foreverNav = document.querySelector(".forever");
const anNav = document.querySelector(".an");
const historyNav = document.querySelector(".history");


stayNav.addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight * 0.1,
        behavior: "smooth"
    })
});

foreverNav.addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight * 1.2,
        behavior: "smooth"
    })
});

anNav.addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight * 2.3,
        behavior: "smooth"
    })
});

historyNav.addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight * 3.6,
        behavior: "smooth"
    })
});



// lecture de musique en arrière plan

const audio = document.getElementById("song");
audio.volume = 0.2;