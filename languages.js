const jsonEN = {
    storage_sub: ' We offer what everyone seems to be missing — space.',
  
  };
  
  const jsonSR = {
    storage_sub: 'Mi imamo ono što svima nedostaje - prostor.',
   
  };
  
  $('.en').click(function () {
    localStorage.setItem('lang', 'en');
    location.reload();
  });
  
  $('.sr').click(function () {
    localStorage.setItem('lang', 'sr');
    location.reload();
  });
  
  $(document).ready(function () {
    const isMobileTablet = window.innerWidth < 992;
  
    if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang', 'en');
      if (isMobileTablet) {
        $('.get_space_en').removeClass('active');
        $('.get_space_mobile_en').addClass('active');
      } else {
        $('.get_space_en').addClass('active');
        $('.get_space_mobile_en').removeClass('active');
      }
  
      $('.sr').addClass('active');
      location.reload();
    } else {
      if (localStorage.getItem('lang') === 'sr') {
        $('.en').addClass('active');
        if (isMobileTablet) {
          $('.get_space_mobile_sr').addClass('active');
          $('.get_space_sr').removeClass('active');
        } else {
          $('.get_space_sr').addClass('active');
          $('.get_space_mobile_sr').removeClass('active');
        }
        for (let key in jsonSR) {
          document.querySelector('.' + key).textContent = jsonSR[key];
          $('.form_btn_lang').attr('value', 'Pošalji');
        }
      } else {
        $('.sr').addClass('active');
        if (isMobileTablet) {
          $('.get_space_mobile_en').addClass('active');
          $('.get_space_en').removeClass('active');
        } else {
          $('.get_space_en').addClass('active');
          $('.get_space_mobile_en').removeClass('active');
        }
  
        for (let key in jsonEN) {
          document.querySelector('.' + key).textContent = jsonEN[key];
          $('.form_btn_lang').attr('value', 'Send');
        }
      }
    }
  });
  