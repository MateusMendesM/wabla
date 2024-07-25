document.getElementById('easterEgg').addEventListener('click', function () {
    alert('what do you mean?');
});

function toggleMobileMenu() {
    var mobileNav = document.getElementById('mobileNav');
    if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
        mobileNav.style.display = 'flex';
    } else {
        mobileNav.style.display = 'none';
    }
}