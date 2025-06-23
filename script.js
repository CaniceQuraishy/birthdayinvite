window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("inviteOverlay");
  const form = document.getElementById("rsvpForm");
  const thankYou = document.getElementById("thankYou");
  const music = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  const musicControl = document.querySelector(".music-control");

  // Reveal popup after 3 seconds
  setTimeout(() => {
    overlay.classList.add("show");
  }, 3000);

  // RSVP form
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    thankYou.style.display = "block";
    form.reset();
  });

  // Default state
  musicToggle.textContent = "🔊 Play Music";

  let musicStarted = false;

  function tryPlayMusic() {
    if (!musicStarted) {
      music.play().then(() => {
        musicStarted = true;
        musicToggle.textContent = "🔇 Pause Music";
        musicControl.classList.add("music-started");
      }).catch(() => {
        // Autoplay blocked
      });
    }
  }

  // Try on first interaction
  document.body.addEventListener("click", tryPlayMusic, { once: true });

  // Manual toggle
  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play().then(() => {
        musicToggle.textContent = "🔇 Pause Music";
        musicControl.classList.add("music-started");
      });
    } else {
      music.pause();
      musicToggle.textContent = "🔊 Play Music";
      musicControl.classList.remove("music-started");
    }
  });
});
