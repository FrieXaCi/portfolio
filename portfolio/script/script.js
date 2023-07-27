// create dynamic menu
//DOM items for menu navbar
const menuBtn = document.querySelector('.menu-btn');
const navbarContainer = document.querySelector('.navbar-container');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function removeMenu() {
  navbarContainer.addEventListener('click', () => {
    menuBtn.classList.remove('close');
    navbarContainer.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));
  });
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    navbarContainer.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));
    // set menu state
    showMenu = true;
    removeMenu();
  } else {
    menuBtn.classList.remove('close');
    navbarContainer.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // set menu state
    showMenu = false;
  }
}
// close menu on mouse leave

// Get the button:
let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
mybutton.addEventListener('click', topFunction);
