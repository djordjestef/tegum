const jsonEN = {
  storage_sub: ' We offer what everyone seems to be missing — space.',
  about_lang: 'About',
};

const jsonSR = {
  storage_sub: 'Mi imamo ono što svima nedostaje - prostor.',
  about_lang: 'o tome',
};

$(document).on('click', '.en', function (event) {
  console.log('clicked EN');
  localStorage.setItem('lang', 'en');
  setTimeout(() => location.reload(), 100);
});

$(document).on('click', '.sr', function (event) {
  console.log('clicked SR');
  localStorage.setItem('lang', 'sr');
  setTimeout(() => location.reload(), 100);
});

$(document).ready(function () {
  const isMobileTablet = window.innerWidth < 992;

  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en');
    $('.sr').addClass('active');
    setTimeout(() => location.reload(), 100);
  } else {
    const lang = localStorage.getItem('lang');
    const jsonData = lang === 'sr' ? jsonSR : jsonEN;
    const activeButton = lang === 'sr' ? '.en' : '.sr';
    setTimeout(() => {
      $(activeButton).addClass('active');
    }, 300);

    for (let key in jsonData) {
      const element = document.querySelector('.' + key);
      if (element) {
        element.textContent = jsonData[key];
      }
    }
  }
});
