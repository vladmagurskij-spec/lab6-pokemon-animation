const gengar = document.getElementById("gengar");
const buttons = document.querySelectorAll(".btn[data-mode]");
const pauseBtn = document.getElementById("pauseBtn");

let paused = false;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        gengar.className = "gengar " + btn.dataset.mode;
    });
});

pauseBtn.addEventListener("click", () => {
    paused = !paused;
    gengar.style.animationPlayState = paused ? "paused" : "running";
    pauseBtn.textContent = paused ? "Продовжити" : "Пауза";
});
