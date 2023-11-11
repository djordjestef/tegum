const jsonEN = {
  main_nav_1: 'Services',
  main_nav_2: 'Products',
  main_nav_3: 'Company',
  nav_btn: 'Inquire',
  main_section_holder_title: 'Maximizing Efficiency, Minimizing Costs.',
  about_us_title: 'ABOUT US',
  main_section_holder_description:
    'TEGUM is your Partner in Industrial Project Management, Production Enhancement and Strategic Process Innovation. We draw on decades of cross-industry experience to deliver real-world specialized solutions.',
  about_us_title_1: 'Industrial Expertise',
  about_us_description_1:
    'TEGUM leverages deep industry expertise to tackle complex challenges. We focus on production efficiency and process improvement to offer tailored solutions to meet your unique business needs.',
  about_us_title_2: 'Strategic Excellence',
  about_us_description_2: `Our strategic support empowers your operational efficiency, stay agile and make well-informed decisions. We're your go-to source for optimizing procurement, quality control, and supply chain management.`,
  about_us_title_3: 'Growth and Prosperity',
  about_us_description_3: `With a dedication to compliance, reliable management consulting and insightful financial guidance, we're here to drive your business's growth and profitability for a future of sustainable success.`,
  what_we_do_title_1:'01 - Project Management',
  what_we_do_title_2:'02 - Consulting Services',
  what_we_do_title_3:'03 - Custom Manufacturing',
};

const jsonSR = {
  main_nav_1: 'Usluge',
  main_nav_2: 'Proizvodi',
  main_nav_3: 'Kompanija',
  nav_btn: 'Raspitaj se',
  main_section_holder_title: 'Maksimiziranje efikasnosti, minimiziranje troškova',
  about_us_title: 'O NAMA',
  main_section_holder_description:
    'TEGUM je vaš partner u upravljanju industrijskim projektima, unapređenju proizvodnje i strateškim inovacijama procesa. Oslanjamo se na višedecenijsko iskustvo u različitim industrijama da bismo pružili specijalizovana rešenja u stvarnom svetu.',
  about_us_title_1: 'Industrial Ekpertise',
  about_us_description_1:
    'TEGUM koristi duboku stručnost u industriji da bi se uhvatio u koštac sa složenim izazovima. Fokusiramo se na efikasnost proizvodnje i poboljšanje procesa kako bismo ponudili rešenja po meri koja će zadovoljiti vaše jedinstvene poslovne potrebe  ',
  about_us_title_2: 'Strateška izvrsnost',
  about_us_description_2:
    'Naša strateška podrška osnažuje vašu operativnu efikasnost, ostanite agilni i donosite odluke sa dobrim informacijama. Mi smo vaš glavni izvor za optimizaciju nabavke, kontrole kvaliteta i upravljanja lancem snabdevanja.',
  about_us_title_3: 'Rast i prosperitet',
  about_us_description_3:
    'Sa posvećenošću usklađenosti, pouzdanim savetovanjem o menadžmentu i pronicljivim finansijskim uputstvima, mi smo tu da pokrenemo rast i profitabilnost vašeg poslovanja za budućnost održivog uspeha.',
    what_we_do_title_1 :'01 - Upravljanje projektima',
    what_we_do_title_2:'02 - Konsultantske usluge',
    what_we_do_title_3:'03 - Izrada po meri',
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
      setTimeout(() => {
        const element = document.querySelector('.' + key);
        if (element) {
          element.textContent = jsonData[key];
        }
      }, 100);
     
    }
  }
});
