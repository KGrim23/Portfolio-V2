
/*
document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').style.display = 
    (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
 });
 */


 const hamburgerButton = document.querySelector(".hamburger-button");
 const mobileLinks = document.querySelector(".mobile-links");

 hamburgerButton.addEventListener("click", () => {
    mobileLinks.style.display = (mobileLinks.style.display == 'none') ? 'block' : 'none';

 })