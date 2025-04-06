window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        this.document.querySelector(".box").classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        this.document.querySelector(".box").classList.remove('scrolled');
    }
});
