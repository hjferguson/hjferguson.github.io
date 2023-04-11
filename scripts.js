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
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right > 0
    );
  }
  
  window.addEventListener("scroll", function () {
    for (var i = 0; i < projects.length; i++) {
        if (isElementInViewport(projects[i])) {
            projects[i].classList.add("slide-in");
            projects[i].classList.remove("hidden");
        } else {
            projects[i].classList.remove("slide-in");
            projects[i].classList.add("hidden");
        }
    }
});
  
  