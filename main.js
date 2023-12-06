$(document).ready(function () {
  const isMobileTablet = window.innerWidth < 992;
  history.scrollRestoration = 'manual';
  //accordion
  if (!isMobileTablet) {
    setTimeout(() => {
      const width = window.innerWidth;
      gsap.registerPlugin(ScrollTrigger);

      const accordion = gsap.timeline({
        defaults: {
          ease: 'none',
          duration: 1,
        },
        scrollTrigger: {
          trigger: '.acc_container',
          start: 'top top',
          end: '+=300%',
          scrub: true,
          pin: '.acc_container',
        },
      });

      accordion.to('#pin1', { height: width < 1400 ? 106 : 114 }, 0);
      accordion.to('#pin2', { height: width < 1400 ? 106 : 114 }, 1);
      // accordion.to('#pin3', { height: window.innerHeight - 10, duration: 0 }, 1); //-10
      // accordion.to('#pin3', { height: width < 1400 ? 106 : 114 }, 2);

      gsap.set('.spacer.bot', {
        marginTop:
          '-=' +
          (window.innerHeight < 800
            ? window.innerHeight + 460
            : window.innerHeight < 1200
            ? window.innerHeight + 640
            : window.innerHeight + 780), //height of spacer//podesi za sve visine
      });
    }, 500);
  }

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

  $('.btn_3').hover(
    function () {
      $('.additional_3').addClass('hovered_btn_3');
    },
    function () {
      $('.additional_3').removeClass('hovered_btn_3');
    },
  );

  $('.hover_animate_1_1').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_1_1').fadeIn(50);
    },
    function () {
      $('.item_img_1_1').fadeOut(50);
    },
  );

  $('.hover_animate_1_2').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_1_2').fadeIn(50);
    },
    function () {
      $('.item_img_1_2').fadeOut(50);
    },
  );
  $('.hover_animate_1_3').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_1_3').fadeIn(50);
    },
    function () {
      $('.item_img_1_3').fadeOut(50);
    },
  );
  $('.hover_animate_1_4').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_1_4').fadeIn(50);
    },
    function () {
      $('.item_img_1_4').fadeOut(50);
    },
  );

  //item 2 hovered

  $('.hover_animate_2_1').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_2_1').fadeIn(50);
    },
    function () {
      $('.item_img_2_1').fadeOut(50);
    },
  );

  $('.hover_animate_2_2').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_2_2').fadeIn(50);
    },
    function () {
      $('.item_img_2_2').fadeOut(50);
    },
  );
  $('.hover_animate_2_3').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_2_3').fadeIn(50);
    },
    function () {
      $('.item_img_2_3').fadeOut(50);
    },
  );
  $('.hover_animate_2_4').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_2_4').fadeIn(50);
    },
    function () {
      $('.item_img_2_4').fadeOut(50);
    },
  );

  //item 3 hovered

  $('.hover_animate_3_1').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_3_1').fadeIn(50);
    },
    function () {
      $('.item_img_3_1').fadeOut(50);
    },
  );

  $('.hover_animate_3_2').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_3_2').fadeIn(50);
    },
    function () {
      $('.item_img_3_2').fadeOut(50);
    },
  );
  $('.hover_animate_3_3').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_3_3').fadeIn(50);
    },
    function () {
      $('.item_img_3_3').fadeOut(50);
    },
  );
  $('.hover_animate_3_4').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_3_4').fadeIn(50);
    },
    function () {
      $('.item_img_3_4').fadeOut(50);
    },
  );
  $('.hover_animate_3_5').hover(
    function () {
      $(this).css({ cursor: 'url(assets/blue_arrow.png), default' });
      $('.item_img_3_5').fadeIn(50);
    },
    function () {
      $('.item_img_3_5').fadeOut(50);
    },
  );

  //horizontal scroll
  document.addEventListener('scroll', horizontalScroll);

  let sticky = document.querySelector('.sticky');
  let stickyParent = document.querySelector('.sticky-parent');
  let startPosition = document.querySelector('.main_section_img');

  const width = window.innerWidth;

  let scrollWidth = sticky.scrollWidth;

  let verticalScrollHeight =
    stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

  function horizontalScroll() {
    let stickyPosition = sticky.getBoundingClientRect().top;
    if (stickyPosition < 1) {
      return;
    } else {
      let scrolled =
        width < 992
          ? false
          : width < 768
          ? startPosition.getBoundingClientRect().top - 400
          : width < 992
          ? startPosition.getBoundingClientRect().top - 200
          : width < 1441
          ? startPosition.getBoundingClientRect().top + 180
          : startPosition.getBoundingClientRect().top + 260;

      sticky.scrollLeft =
        width < 992
          ? false
          : width < 1200
          ? (scrollWidth / verticalScrollHeight + 100) * -scrolled * 0.06
          : width < 1400
          ? (scrollWidth / verticalScrollHeight + 50) * -scrolled * 0.065
          : width < 1441
          ? (scrollWidth / verticalScrollHeight + 20) * -scrolled * 0.06
          : width < 1661
          ? (scrollWidth / verticalScrollHeight + 40) * -scrolled * 0.05
          : width < 1900
          ? (scrollWidth / verticalScrollHeight + 30) * -scrolled * 0.035
          : (scrollWidth / verticalScrollHeight + 30) * -scrolled * 0.02;
    }
  }
  //horizontal scroll
});

//subject contact form

$('.get_started_page_btn').on('click', () => {
  var current = location.pathname.split('/').pop().replace('.html', '');
  localStorage.setItem('subject', current);
});

$(document).on('click', '.subject_btn', function (event) {
  const lang = localStorage.getItem('lang');
  let subject;
  if (lang === 'en') {
    subject = $(this).attr('attrEN');
    localStorage.setItem('subject', subject);
  } else {
    subject = $(this).attr('attrSR');
    localStorage.setItem('subject', subject);
  }
});

//contact form

document.addEventListener('change', function (event) {
  let element = event.target;
  if (element && element.matches('.form-element-field')) {
    element.classList[element.value ? 'add' : 'remove']('-hasvalue');
  }
});
