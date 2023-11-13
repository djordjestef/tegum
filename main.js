$(document).ready(function () {
  //accordion

  setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger);

    console.log('window.innerHeight',window.innerHeight)

    const accordion = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 1,
      },
      scrollTrigger: {
        trigger: '.acc_container',
        start: 'top top',
        // end: '+=' + (window.innerHeight * 3 - 900),
        end: '+=200%',
        scrub: true,
        // markers: true,
        pin: '.acc_container',
      },
    });

    accordion.to('#pin1', { height: 0 }, 0);
    // accordion.to('#pin2', { height: window.innerHeight -100 }, 0); //-10
    accordion.to('#pin2', { height: 0 }, 1);
    // accordion.to('#pin3', { height: window.innerHeight - 10, duration: 0 }, 1); //-10
    accordion.to('#pin3', { height: 0 }, 2);

    gsap.set('.spacer.bot', { marginTop: '-=' + (window.innerHeight + 1020) });
    // gsap.to('.spacer.bot', {
    //   marginTop: `-=${window.innerHeight + 1050}`,
    //   scrollTrigger: {
    //     trigger: '.acc_container',
    //     start: 'top top',
    //     end: '+=250%', // Adjust this value based on your needs
    //     scrub: 1, // Adjust the scrub value to control the scroll speed
    //   },
    // });
  }, 200);

  //end of accordion

  // //navbar

  $(document).on('click', 'li.dropdown > a', function (event) {
    var $ul = $(this).parent().find('ul').first();

    var isOpened = $ul.css('display') === 'block';
    if (!isOpened) {
      $ul.css({ opacity: 0, display: 'block' }).stop().animate(
        {
          opacity: 1,
        },
        {
          duration: 200,
        },
      );
    } else {
      $ul.stop().animate(
        {
          opacity: 0,
        },
        {
          duration: 200,
          complete: function () {
            $ul.css({ display: 'none', opacity: 1 });
          },
        },
      );
    }
    $(this).parent('li').toggleClass('opened');
    $(this).parent().siblings().find('ul').hide(1);
    $(this).parent().siblings('li').removeClass('opened');
    $(this).siblings().find('li').removeClass('opened');

    if ($(this).parent('li').hasClass('opened')) {
      $(this).find('.plus-minus-toggle').removeClass('collapsed');
      $(this).parent().siblings().find('.plus-minus-toggle').addClass('collapsed');
    } else {
      $(this).find('.plus-minus-toggle').addClass('collapsed');
    }
    event.preventDefault();
  });
  var pageScroll = function (e) {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.main-navigation').outerHeight();

    $(window).scroll(function (e) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    });

    function hasScrolled() {
      var st = $(this).scrollTop();
      var navbarHeight = $('.main-navigation').outerHeight();

      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && st > navbarHeight) {
        $('.main-navigation').removeClass('nav-down').addClass('nav-up');
      } else {
        if (st + $(window).height() < $(document).height()) {
          $('.main-navigation').removeClass('nav-up').addClass('nav-down');
        }
      }

      lastScrollTop = st;
    }
  };

  pageScroll();

  $('section').click(function () {
    $('.plus-minus-toggle').addClass('collapsed');
    $('.dropdown-menu')
      .stop()
      .animate(
        {
          opacity: 0,
        },
        {
          duration: 200,
          complete: function () {
            $(this).css('display', 'none');
          },
        },
      );
  });

  $('.dropdown-menu').click(function (event) {
    event.stopPropagation();
  });

  //hover animation


  $('.btn-6').hover(
    function() {
      $('.additional').addClass('hovered');
    },
    function() {
      $('.additional').removeClass('hovered');
    }
  );

  $('.hover_animate_1_1').hover(
    function () {
      $(this).css({ cursor: 'url(/assets/white_arrow.png), default' });
      $('.item_img_1_1').fadeIn(200);
      $('.background_helper').css('background-color', '#f3f3f3').fadeIn(200);
    },
    function () {
      $('.item_img_1_1').fadeOut(200);
      $('.background_helper').css('background-color', '#fff').fadeOut(100);
    },
  );

  $('.hover_animate_1_2').hover(
    function () {
      $(this).css({ cursor: 'url(/assets/white_arrow.png), default' });
      $('.item_img_1_2').fadeIn(200);
      $('.background_helper').css('background-color', '#f3f3f3').fadeIn(200);
    },
    function () {
      $('.item_img_1_2').fadeOut(200);
      $('.background_helper').css('background-color', '#fff').fadeOut(100);
    },
  );
});
