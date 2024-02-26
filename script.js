
AOS.init();

const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Student", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Student", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Student", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Student", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();
  ///
  // JavaScript code to handle active state in navigation links

document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  var navLinks = document.querySelectorAll('.nav-list a');

  // Add click event listener to each link
  navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
          // Remove 'active' class from all links
          navLinks.forEach(function (link) {
              link.classList.remove('active');
          });

          // Add 'active' class to the clicked link
          link.classList.add('active');
      });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated'); // Add animated class
    }
  });
});

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
  observer.observe(box);
});


