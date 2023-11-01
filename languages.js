const jsonEN = {
  storage_sub: ' We offer what everyone seems to be missing — space.',
};

const jsonSR = {
  storage_sub: 'Mi imamo ono što svima nedostaje - prostor.',
};

$('.en').click(function () {
  console.log('clicked EN');
  localStorage.setItem('lang', 'en');
  location.reload();
});

$('.sr').click(function () {
  console.log('clicked SR');
  localStorage.setItem('lang', 'sr');
  location.reload();
});

$(document).ready(function () {
  const isMobileTablet = window.innerWidth < 992;

  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en');

    $('.sr').addClass('active');
    location.reload();
  } else {
    if (localStorage.getItem('lang') === 'sr') {
      $('.en').addClass('active');

      for (let key in jsonSR) {
        document.querySelector('.' + key).textContent = jsonSR[key];
      }
    } else {
      $('.sr').addClass('active');

      for (let key in jsonEN) {
        document.querySelector('.' + key).textContent = jsonEN[key];
      }
    }
  }
});
