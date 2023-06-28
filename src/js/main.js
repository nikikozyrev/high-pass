ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.760446, 37.615038],
    zoom: 13,
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([55.769500, 37.639002], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/placemark.png',
    iconImageSize: [12, 12]
  });
  myMap.geoObjects.add(myPlacemark);
}


let search = document.querySelector('.search-btn');
let searchForm = document.querySelector('.search-form');
let closeBtn = document.querySelector('.close-btn');

search.addEventListener('click',
  function () {
    searchForm.classList.toggle('search-form--show');
  })

closeBtn.addEventListener('click',
  function () {
    searchForm.classList.remove('search-form--show');
  })


searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
})


let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-bottom');
let menuLinks = document.querySelectorAll('.nav__link');
let closeBurger = document.querySelector('.burger-close-btn')
burger.addEventListener('click',
  function () {
    menu.classList.toggle('nav-bottom--active');
  })

closeBurger.addEventListener('click',
  function () {
    menu.classList.toggle('nav-bottom--active');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {
      menu.classList.remove('nav-bottom--active');
    })
})



document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('#form');

  validation
    .addField('#name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: "Вы не ввели имя"
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Вы ввели слишком длинное имя"
    }
    ])
    .addField('#mail', [{
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы некорректно ввели e-mail',
    }
    ])
})

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('#subscription');

  validation
    .addField('#mail2', [{
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы некорректно ввели e-mail',
    }
    ])
})



gsap.from(".anim-1", { y: -15, duration: 0.5, delay: 0.3, opacity: 0 });
gsap.from(".anim-2", { y: 15, duration: 0.5, delay: 0.5, opacity: 0 });
gsap.from(".anim-3", { duration: 0.5, delay: 0.7, opacity: 0 });
gsap.from(".anim-4", { x: -15, duration: 0.5, delay: 0.9, opacity: 0 });
gsap.from(".anim-5", { x: 15, duration: 0.5, delay: 1.1, opacity: 0 });
gsap.from(".anim-6", { y: -15, duration: 0.5, delay: 1.3, opacity: 0 });



let closeContacts = document.querySelector('.contacts__close');
let contacts = document.querySelector('.adress-wrap');
let content = document.querySelector('.address__text');
let contentWrap = document.querySelector('.adress');

closeContacts.addEventListener('click',
  function () {
    contacts.classList.toggle('adress-wrap--close');
    content.classList.toggle('display-none');
    closeContacts.classList.toggle('contacts__close--arrow');
    contentWrap.classList.toggle('padding-none');
  })
