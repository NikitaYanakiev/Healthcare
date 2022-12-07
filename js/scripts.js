$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 65,
        nav: true,
        navText: ['', ''],
        autoplay: false,
        dots: true,
        rewind: true,
        dotsEach: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 3
            }
        }
    });
});