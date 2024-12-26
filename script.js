document.querySelectorAll(".choice button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active"); // Add/remove "active" class
  });
});
