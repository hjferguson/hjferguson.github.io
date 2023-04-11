document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//animations
document.addEventListener("DOMContentLoaded", function () {
    var projects = document.getElementsByClassName("project-box");
  
    for (var i = 0; i < projects.length; i++) {
      projects[i].classList.add("hidden");
    }
  
    window.addEventListener("scroll", function () {
      for (var i = 0; i < projects.length; i++) {
        if (isElementInViewport(projects[i])) {
          projects[i].classList.add("slide-in");
          projects[i].classList.remove("hidden");
        }
      }
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  