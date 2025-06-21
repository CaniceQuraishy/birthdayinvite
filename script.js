window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("inviteOverlay");
  setTimeout(() => {
    overlay.classList.add("show");
  }, 2000);

  const form = document.getElementById("rsvpForm");
  const thankYou = document.getElementById("thankYou");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    thankYou.style.display = "block";
    form.reset();
  });
});
