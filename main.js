$(document).ready(function () {
  //accordion

  setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger);

    const accordion = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 1,
      },
      scrollTrigger: {
        trigger: '.acc_container',
        start: 'top top',
        // end: '+=' + (window.innerHeight * 3 - 900),
        end: '+=500%',
        scrub: true,
        // markers: true,
        pin: '.acc_container',
      },
    });

    accordion.to('#pin1', { height: 0 }, 0);

    accordion.to('#pin2', { height: 0 }, 1);
    // accordion.to('#pin3', { height: window.innerHeight - 10, duration: 0 }, 1); //-10
    accordion.to('#pin3', { height: 0 }, 2);

    gsap.set('.spacer.bot', {
      marginTop:
        '-=' + (window.innerHeight < 760 ? window.innerHeight + 1020 : window.innerHeight + 2220),
    });
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
    var aboutUsSection = $('.about_us');
    var aboutUsHeight = aboutUsSection.height();

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
      // var isInsideAboutUs = st >= aboutUsSection.offset().top && st <= aboutUsSection.offset().top + aboutUsHeight;

      // if (isInsideAboutUs) {
      //   // The user is inside the .about_us section
      //   console.log('Inside About Us section');
      // } else {
      //   // The user is outside the .about_us section
      //   console.log('Outside About Us section');
      // }

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

  $('.btn_1').hover(
    function () {
      $('.additional_1').addClass('hovered_btn_1');
    },
    function () {
      $('.additional_1').removeClass('hovered_btn_1');
    },
  );

  $('.btn_2').hover(
    function () {
      $('.additional_2').addClass('hovered_btn_2');
    },
    function () {
      $('.additional_2').removeClass('hovered_btn_2');
    },
  );

  $('.hover_animate_1_1').hover(
    function () {
      $(this).css({ cursor: 'url(/assets/blue_arrow.png), default' });
      $('.item_img_1_1').fadeIn(200);
      $('.background_helper_1').css('background-color', '#f3f3f3').fadeIn(200);
    },
    function () {
      $('.item_img_1_1').fadeOut(200);
      $('.background_helper_1').css('background-color', '#fff').fadeOut(100);
    },
  );

  $('.hover_animate_1_2').hover(
    function () {
      $(this).css({ cursor: 'url(/assets/blue_arrow.png), default' });
      $('.item_img_1_2').fadeIn(200);
      $('.background_helper_1').css('background-color', '#f3f3f3').fadeIn(200);
    },
    function () {
      $('.item_img_1_2').fadeOut(200);
      $('.background_helper_1').css('background-color', '#fff').fadeOut(100);
    },
  );

  //horizontal scroll
  document.addEventListener('scroll', horizontalScroll);

  let sticky = document.querySelector('.sticky');
  let stickyParent = document.querySelector('.sticky-parent');
  let startPosition = document.querySelector('.main_section_img');

  const width = window.innerWidth;
  console.log('width', width);

  let scrollWidth = sticky.scrollWidth ;
  console.log('scrollWidth',scrollWidth)
  let verticalScrollHeight =
    stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

  function horizontalScroll() {
    let stickyPosition = sticky.getBoundingClientRect().top;
    console.log('stickyPosition', stickyPosition);
    if (stickyPosition < 1) {
      // return
    } else {
      let scrolled = startPosition.getBoundingClientRect().top + 300;
      console.log('scrolled', scrolled);

      sticky.scrollLeft =
        width < 1200
          ? (scrollWidth / verticalScrollHeight + 2000) * -scrolled * 0.006
          : width < 1440
          ? (scrollWidth / verticalScrollHeight) * -scrolled * 1.66
          : (scrollWidth / verticalScrollHeight ) * -scrolled * 0.06;
    }
  }
  //horizontal scroll
});
