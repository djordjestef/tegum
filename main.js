$(document).ready(function () {
  //accordion
  gsap.registerPlugin(ScrollTrigger);

  const accordion = gsap.timeline({
    defaults: {
      ease: 'none',
      duration: 1,
    },
    scrollTrigger: {
      trigger: '.acc_container',
      start: 'top top',
      end: '+=' + (window.innerHeight * 3 - 900),
      scrub: true,
      pin: '.acc_container',
    },
  });

  accordion.to('#pin1', { height: 100 }, 0);
  accordion.to('#pin2', { height: window.innerHeight - 200 }, 0);
  accordion.to('#pin2', { height: 100 }, 1);
  accordion.to('#pin3', { height: window.innerHeight - 200 }, 1);
  accordion.to('#pin3', { height: 100 }, 2);

  gsap.set('.spacer.bot', { marginTop: '-=' + (window.innerHeight - 300) });

  //end of accordion
});

//navbar
$(function () {
  //   $('li.dropdown > a').on('click', function (event) {
  $(document).on('click', 'li.dropdown > a', function (event) {
    // Toggle the dropdown without preventing default
    $(this).parent().find('ul').first().toggle(300);
    $(this).parent('li').toggleClass('opened');
    $(this).parent().siblings().find('ul').hide(200);
    $(this).parent().siblings('li').removeClass('opened');
    $(this).siblings().find('li').removeClass('opened');

    if ($(this).parent('li').hasClass('opened')) {
      $(this)
        .find('img')
        .css({ transform: 'rotate(' + 180 + 'deg)' });
      $(this)
        .parent()
        .siblings()
        .find('img')
        .css({ transform: 'rotate(' + 0 + 'deg)' });
    } else {
      $(this)
        .find('img')
        .css({ transform: 'rotate(' + 0 + 'deg)' });
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
});
