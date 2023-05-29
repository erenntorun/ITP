(function() {
    "use strict";

    window.addEventListener("load",init);

    function init(){
/* Kutuların Belirli Süre Sonra Gelmesi. */
ScrollReveal().reveal('.ani1',{delay:250});
ScrollReveal().reveal('.ani2',{delay:500});
ScrollReveal().reveal('.ani3',{delay:750});
ScrollReveal().reveal('.ani4',{delay:1000});

ScrollReveal().reveal('.ani5',{delay:1000});
ScrollReveal().reveal('.ani6',{delay:1250});
ScrollReveal().reveal('.ani7',{delay:1500});



/* Kutuların Sağdan,Soldan,Üstten ve Alttan gelmesi. */
window.sr = ScrollReveal();

sr.reveal('.anime-left',{
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.anime-left2',{
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay:1200
});

sr.reveal('.anime-right',{
  origin:'right',
  duration:1000,
  distance:'25rem',
  delay:600
});

sr.reveal('.anime-right2',{
  origin:'right',
  duration:1000,
  distance:'25rem',
  delay:300
});

sr.reveal('.anime-right3',{
  origin:'right',
  duration:1000,
  distance:'25rem',
  delay:1200
});

sr.reveal('.anime-top',{
  origin:'top' ,
  duration:1000,
  distance:'25rem',
  delay:600
});

sr.reveal('.anime-top2',{
  origin:'top' ,
  duration:1000,
  distance:'25rem',
  delay:300
});

sr.reveal('.anime-bottom',{
  origin:'bottom',
  duration:1000,
  distance:'25rem',
  delay:600
});
    };


})();