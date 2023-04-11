document.addEventListener("DOMContentLoaded", function () {
    var projects = document.getElementsByClassName("project-box");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function toggleAnimation() {
      for (var i = 0; i < projects.length; i++) {
        if (isElementInViewport(projects[i])) {
          projects[i].classList.add("slide-in");
          projects[i].classList.remove("hidden");
        } else {
          projects[i].classList.remove("slide-in");
          projects[i].classList.add("hidden");
        }
      }
    }
  
    window.addEventListener("scroll", toggleAnimation);
    toggleAnimation();
  });
  