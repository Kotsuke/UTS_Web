function toggleMenu() {
    const menu = document.getElementById("navbar-menu");
    if (menu) {
      menu.classList.toggle("show");
    } else {
      console.error("Element with ID 'navbar-menu' not found.");
    }
  }
  
  function scrollToSection(sectionId) {
    document
      .getElementById(sectionId)
      .scrollIntoView({ behavior: "smooth" });
  }
  window.addEventListener('scroll', function() {
    var element = document.querySelector('.card');
    var prevScrollpos = window.pageYOffset;
  
    if (prevScrollpos > window.pageYOffset) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    } 
  });

