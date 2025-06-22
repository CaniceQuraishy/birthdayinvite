window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("inviteOverlay");
  setTimeout(() => {
    overlay.classList.add("show");
  }, 3000);

  const form = document.getElementById("rsvpForm");
  const thankYou = document.getElementById("thankYou");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    thankYou.style.display = "block";
    form.reset();
  });

  // Music toggle
  const music = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");

  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicToggle.textContent = "🔇 Pause Music";
    } else {
      music.pause();
      musicToggle.textContent = "🔊 Play Music";
    }
  });
});
