document.addEventListener("DOMContentLoaded", function() {
    const analise = document.querySelector(".analise");
  
    window.addEventListener("scroll", function() {
      if (isElementInViewport(analise)) {
        analise.style.display = "block";
      }
    });
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  });