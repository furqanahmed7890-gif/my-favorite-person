const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");

let isPlaying = false;

musicBtn.addEventListener("click", async () => {
    try {
        if (!isPlaying) {
            await bgMusic.play();
            isPlaying = true;
            musicBtn.textContent = "Pause Music ⏸️";
            musicBtn.classList.add("playing");
        } else {
            bgMusic.pause();
            isPlaying = false;
            musicBtn.textContent = "Play Music 🎵";
            musicBtn.classList.remove("playing");
        }
    } catch (e) {
        console.error("Music play error:", e);
    }
});
