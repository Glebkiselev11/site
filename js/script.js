
// нав бар

document.querySelector('.navbar__button').onclick = function() {
  document.querySelector('.navbar__button').classList.toggle('navbar__button_active');
  document.querySelector('.menu-mobile').classList.toggle('menu-mobile_active');
};

document.querySelector('.menu-mobile').onclick = function() {
  document.querySelector('.menu-mobile').classList.remove('menu-mobile_active');
  document.querySelector('.navbar__button').classList.toggle('navbar__button_active');
};

//плавная прокрутка нав бара

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// preloader

document.body.onload = function(){

    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
        }
    }, 500);
}