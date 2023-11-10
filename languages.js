const jsonEN = {
  main_nav_1: 'Services',
  main_nav_2: 'Products',
  main_nav_3: 'Company',
  nav_btn: 'Inquire',
  main_section_holder_title: 'Maximizing Efficiency, Minimizing Costs.',
  main_section_holder_description:
    'TEGUM is your Partner in Industrial Project Management, Production Enhancement and Strategic Process Innovation. We draw on decades of cross-industry experience to deliver real-world specialized solutions.',
  flex_columns_title_1: 'Industrial Expertise',
  flex_columns_description_1:
    'TEGUM leverages deep industry expertise to tackle complex challenges. We focus on production efficiency and process improvement to offer tailored solutions to meet your unique business needs.',
};

const jsonSR = {
  main_nav_1: 'Usluge',
  main_nav_2: 'Proizvodi',
  main_nav_3: 'Kompanija',
  nav_btn: 'Raspitaj se',
  main_section_holder_title: 'Maksimiziranje efikasnosti, minimiziranje troškova',
  main_section_holder_description:
    'TEGUM je vaš partner u upravljanju industrijskim projektima, unapređenju proizvodnje i strateškim inovacijama procesa. Oslanjamo se na višedecenijsko iskustvo u različitim industrijama da bismo pružili specijalizovana rešenja u stvarnom svetu.',
  flex_columns_title_1: 'Industrial Ekpertise',
  flex_columns_description_1:
    'TEGUM koristi duboku stručnost u industriji da bi se uhvatio u koštac sa složenim izazovima. Fokusiramo se na efikasnost proizvodnje i poboljšanje procesa kako bismo ponudili rešenja po meri koja će zadovoljiti vaše jedinstvene poslovne potrebe  ',
};

$(document).on('click', '.en', function (event) {
  localStorage.setItem('lang', 'en');
  // setTimeout(() => location.reload(), 100);
  window.location.href = window.location.href;
});

$(document).on('click', '.sr', function (event) {
  localStorage.setItem('lang', 'sr');
  // setTimeout(() => location.reload(), 100);
  window.location.href = window.location.href;
});

$(document).ready(function () {
  const isMobileTablet = window.innerWidth < 992;

  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en');
    $('.sr').addClass('active');
    setTimeout(() => (window.location.href = window.location.href), 100);
  } else {
    const lang = localStorage.getItem('lang');
    const jsonData = lang === 'sr' ? jsonSR : jsonEN;
    const activeButton = lang === 'sr' ? '.en' : '.sr';
    setTimeout(() => {
      $(activeButton).addClass('active');
    }, 300);

    for (let key in jsonData) {
      console.log('jsonData', jsonData);
      const element = document.querySelector('.' + key);
      if (element) {
        element.textContent = jsonData[key];
      }
    }
  }
});
