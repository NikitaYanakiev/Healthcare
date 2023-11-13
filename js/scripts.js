$(document).ready(function () {
    $('.header_burger').click(function () {
        toggleBurgerMenu();
    });

    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 65,
      nav: true,
      navText: ['', ''],
      autoplay: false,
      autoplayHoverPause: true,
      dots: true,
      rewind: true,
      dotsEach: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 1, nav: false },
        768: { items: 2, nav: false },
        1200: { items: 3 }
      }
    });

    $(window).scroll(scrollFunction);

    function scrollFunction() {
      $('#myBtn').css('display', $(document).scrollTop() > 20 ? 'flex' : 'none');
    }

    $('a[href*="#"]').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();

        const header = $('.header_burger'),
              nav = $('nav');
        if (header.hasClass('active') && nav.hasClass('active')) {
          toggleBurgerMenu();
        }

        const blockID = $(this).attr('href').substr(1);
        $('#' + blockID).get(0).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });

  function toggleBurgerMenu() {
    $('.header_burger, nav').toggleClass('active');
    $('body').toggleClass('lock');
  }