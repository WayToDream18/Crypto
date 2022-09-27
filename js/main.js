document.querySelector('.lang__button').addEventListener('click', function () {
  document.querySelector('.lang__list').classList.toggle('lang__list--visible');
  this.classList.add('.lang__down--active');
});

document.querySelectorAll('.lang__list-item').forEach(function (listItem) {
  listItem.addEventListener('click', function () {
    document.querySelector('.lang__button').innerText = this.innerText;
    document.querySelector('lang__button').focus();
    document.querySelector('lang__input-hidden').value = this.dataset.value;
    document.querySelector('lang__list').classList.remove('lang__list--visible');
  })
})

let swiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 33,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    slidesPerView: 1,
    spaceBetween: 130,
    loop: true,
    loopedSlides: 1,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320:{
      slidesPerView:1,
    },
    480: {
        slidesPerView: 2,
    },
    850: {
        spaceBetween: 20,
        slidesPerView: 3,
    },
    1200: {
        spaceBetween: 30,
        slidesPerView: 4,
    },
    1395: {
        spaceBetween: 30,
        slidesPerView: 5,
        slidesToShow:1,
    }
  }
});

const serviceItems = document.querySelectorAll('.slide__card');
if (window.matchMedia('(any-hover: hover)').matches) {
  serviceItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const hiddenPart = item.querySelector('.services__item-hidden');
      hiddenPart.style.maxHeight = hiddenPart.scrollHeight + 'px';
    });

    item.addEventListener('mouseout', () => {
      const hiddenPart = item.querySelector('.services__item-hidden');
      hiddenPart.style.maxHeight = 0;
    });
  });
}


const accordeon = Array.from(document.getElementsByClassName('box__contBx'));

accordeon.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    const itemContent = item.querySelector('.box__body');
    if (item.classList.contains('active')) {
      itemContent.style.maxHeight = itemContent.scrollHeight + 'px';
    } else {
      itemContent.style.maxHeight = 0;
    }
  })

})

const burgerMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__list');
if (burgerMenu) {
  const menuBody = document.querySelector('.menu__list');
  burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    burgerMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}
if (menuBody.classList.contains('_active')) {
  document.body.classList.remove('_lock');
  burgerMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
}

const menuArrow = document.querySelector('.menu__link_arrow');

const toggleDropdownMenu = () => {
  menuArrow.parentElement.classList.toggle('active');
  if (window.matchMedia('(max-width: 767px)').matches) {
    const subMenu = menuArrow.nextElementSibling;
    if (menuArrow.parentElement.classList.contains('active')) {
      subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
    } else {
      subMenu.style.maxHeight = 0;
    }
  }
}

menuArrow.addEventListener('click', toggleDropdownMenu);