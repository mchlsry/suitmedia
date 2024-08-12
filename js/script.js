let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Ketika di-scroll ke bawah
        navbar.style.top = '-80px'; // Sembunyikan navbar (sesuaikan ukuran dengan tinggi navbar Anda)
    } else {
        // Ketika di-scroll ke atas
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});