window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("inviteOverlay");

  // Delay the show and background transition
  setTimeout(() => {
    overlay.classList.add("show");
  }, 3000); // 3 seconds

  const form = document.getElementById("rsvpForm");
  const thankYou = document.getElementById("thankYou");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    thankYou.style.display = "block";
    form.reset();
  });
});
