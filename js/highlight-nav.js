const sections = document.querySelectorAll(".anchor[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset; // Get current scroll position

  sections.forEach((current) => {
    const section = current.nextElementSibling;
    const sectionHeight = section.offsetHeight;
    const sectionTop = current.offsetTop - 250;
    let sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
