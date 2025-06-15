/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
  const photo = document.getElementById('photo');
  const images = [
    'assets/img/yu1.jpg',
    'assets/img/yu2.jpg',
    'assets/img/yu3.jpg',
    'assets/img/yu4.jpg',
    'assets/img/yu5.jpg'
  ];
  let currentIndex = 0;

  function showPhoto(index) {
    photo.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      photo.src = images[index];
      photo.style.transform = 'rotateY(0deg)';
    }, 300);
  }

  window.nextPage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showPhoto(currentIndex);
  };

  window.prevPage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showPhoto(currentIndex);
  };
});