$(document).ready(function () {
    $('.header_burger').click(function(event) {
        $('.header_burger, nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 65,
        nav: true,
        navText: ['', ''],
        autoplay: true,
        autoplayHoverPause: true,
        dots: true,
        rewind: true,
        dotsEach: true,
        autoplayTimeout: 3000,
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

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "flex";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


});