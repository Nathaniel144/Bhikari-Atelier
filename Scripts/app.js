// navigation toggle
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close');
//to display menu
toggleMenu.addEventListener('click', display);
function display() {
  navMenu.classList.toggle('nav-show');
  gsap.from('.nav-item', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.6,
    ease: Power3.easeOut,
  });
}
//to hide menu
closeMenu.addEventListener('click', hide);
function hide() {
  navMenu.classList.remove('nav-show');
}
//Navigation toggle end.

//Adding the active class to the main navigation
const currentLocation = location.href,
  navLink = document.querySelectorAll('.nav-item a'),
  navLinkLength = navLink.length;

for (let i = 0; i < navLinkLength; i++) {
  if (navLink[i].href === currentLocation) {
    navLink[i].className = 'active';
  }
}
//End of adding active to the navigation class

//footer year
const BAYear = document.querySelector('.BAYear');
const newYear = new Date().getFullYear();
BAYear.innerHTML = newYear;
