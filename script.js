const burgerIcon = document.querySelector('.burger');

const navbarLinks = document.querySelector('.nav-links');

const navLinkItems = document.querySelectorAll('.nav-links li');

burgerIcon.addEventListener('click', () => {
  navbarLinks.classList.toggle('nav-active');

  navLinkItems.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `menuSlide 0.5s ease forwards ${index / 5 + 0.6}s`;
    }
  });

  burgerIcon.classList.toggle('toggle-close');
});
