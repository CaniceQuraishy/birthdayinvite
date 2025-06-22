window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("inviteOverlay");
  const form = document.getElementById("rsvpForm");
  const thankYou = document.getElementById("thankYou");
  const music = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");

  // Reveal popup after 3 seconds
  setTimeout(() => {
    overlay.classList.add("show");
  }, 3000);

  // Form logic
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    thankYou.style.display = "block";
    form.reset();
  });

  // Music autoplay workaround for mobile
  let musicStarted = false;

  function tryPlayMusic() {
    if (!musicStarted) {
      music.play().then(() => {
        musicStarted = true;
        musicToggle.textContent = "🔇 Pause Music";
      }).catch(() => {
        // Autoplay blocked — wait for user click
        musicToggle.textContent = "🔊 Play Music";
      });
    }
  }

  // Try once on load
  tryPlayMusic();

  // Also try again on first user interaction
  document.body.addEventListener("click", tryPlayMusic, { once: true });

  // Toggle music manually
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
