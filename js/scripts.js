$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 65,
        nav: true,
        navText: ['', ''],
        autoplay: true,
        dots: true,
        rewind: true,
        dotsEach: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                nav: false,
            },
            1200: {
                items: 3
            }
        }
    });
});