// --------------------
// Background Music
// --------------------

const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    music.play();
    playBtn.innerHTML = "🎵 Music Playing...";
});

// --------------------
// Surprise Button
// --------------------

const wishBtn = document.getElementById("wishBtn");

wishBtn.addEventListener("click", () => {

    alert("❤️ Happy Friendship Day ❤️\n\nThank you for being a wonderful part of my life.\nMay our friendship last forever! 🤝");

    createConfetti();

});

// --------------------
// Auto Slideshow
// --------------------

const images = [
    "images/friend1.jpg",
    "images/friend2.jpg",
    "images/friend3.jpg",
    "images/group.jpg"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("slide").src = images[index];

},3000);

// --------------------
// Floating Hearts
// --------------------

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*40) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },6000);

},300);

// --------------------
// Typing Effect
// --------------------

const typing = document.querySelector(".typing");

const text = "Friendship is the most beautiful gift of life ❤️";

typing.innerHTML = "";

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,80);

    }

}

typeWriter();

// --------------------
// Confetti
// --------------------

function createConfetti(){

    for(let i=0;i<150;i++){

        let confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.left = Math.random()*100+"vw";
        confetti.style.top = "-20px";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background =
            "hsl(" + Math.random()*360 + ",100%,50%)";
        confetti.style.borderRadius = "50%";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        let fall = Math.random()*5+3;

        confetti.animate([
            {
                transform:"translateY(0px)"
            },
            {
                transform:"translateY(100vh) rotate(720deg)"
            }

        ],{

            duration:fall*1000,

            easing:"linear"

        });

        setTimeout(()=>{
            confetti.remove();
        },fall*1000);

    }

}
