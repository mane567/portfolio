document.querySelectorAll(".glass, .profile-wrapper").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.8s ease";
});

window.addEventListener("load", () => {
  document.querySelectorAll(".glass, .profile-wrapper").forEach(el => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  });
});
