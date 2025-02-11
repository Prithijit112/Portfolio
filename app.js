document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  const header = document.getElementById("header");
  if (scroll_position > 250) {
    header.style.background = "#29323c"; // Dark background
  } else {
    header.style.background = "transparent"; // Transparent background
  }
});
