const togglebutton = document.querySelector('.toggle-button');

const navbarLinks = document.querySelector('.nav-links');

togglebutton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
