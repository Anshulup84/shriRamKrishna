const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.getElementById('get-direction').addEventListener('click', function() {
    window.open(`https://www.google.com/maps/place/Shri+Ram+Krishna+Auto+Parts/@27.2352285,79.0502925,19.3z/data=!4m7!3m6!1s0x3975966a4b52fe63:0x1bba07b5ac22ecb0!4b1!8m2!3d27.2351697!4d79.0505429!16s%2Fg%2F11c1xdc1pl?hl=en&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D`);
});