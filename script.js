const help = document.getElementById("help");

const bars = document.getElementById("bars");

const roof = document.getElementById("roof");

const gif = document.getElementById("gif");

const person = document.getElementById("person");

const ng = document.getElementById("ng");
const introText = document.getElementById("introText");
const successText = document.getElementById("successText");

let progress = 0;

let finished = false;

let decay;

function update() {

    bars.style.transform =
        `translate(-50%, calc(-50% - ${progress}px))`;

    roof.style.transform =
        `translate(-50%, calc(-50% - ${progress}px))`;

    // Fade NG from 50% → 100%
    const maxProgress = 220; // same value as your win condition
    const opacity = 0.5 + (progress / maxProgress) * 0.5;

    ng.style.opacity = Math.min(opacity, 1);

}

help.addEventListener("click",()=>{

    document.body.classList.add("shake");

    setTimeout(()=>{
        document.body.classList.remove("shake");
    },120);
});

help.addEventListener("click", () => {

    if (finished) return;

    progress += 20;      // was 12

    if (progress > 250)
        progress = 250;

    update();

});

function decayLoop() {

    if (finished) return;

    if (progress > 0) {

        progress -= 1;   // was 3

        if (progress < 0)
            progress = 0;

        update();
    }

    if (progress >= 240) {   // was 240

        finished = true;

        gif.style.display = "none";
        person.style.display = "block";
        ng.style.opacity = 1;
        finished = true;

        gif.style.display = "none";
        person.style.display = "block";
        ng.style.opacity = 1;

        introText.style.display = "none";
        successText.style.display = "block";
        celebrate();
        document.querySelector(".title").textContent = "🎉CỨU ĐƯỢC RÒI🎉";
    }

}


function celebrate() {

    // Big burst
    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    // Left cannon
    confetti({
        particleCount: 80,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
    });

    // Right cannon
    confetti({
        particleCount: 80,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
    });

}

decay = setInterval(decayLoop, 10);   // was 30ms
const popup=document.getElementById("popup");

popup.style.display="none";

document.getElementById("helpPro").onclick=()=>{

    popup.style.display="flex";

}

document.getElementById("close").onclick=()=>{

    popup.style.display="none";

}
