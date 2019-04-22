(() => {
  $('.teachers__slider').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<img src='img/teachers/next.png'>","<img src='img/teachers/next.png'>"],
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
        },
        768:{
            items:1,
            margin: -324,
        },
        1200:{
            items:3,
            margin: 0
        }
    }
})

$('.reviews__slider').owlCarousel({
  loop:true,
  nav:true,
  navText: ["<img src='img/teachers/next.png'>","<img src='img/teachers/next.png'>"],
  responsiveClass:true,
  responsive:{
      320:{
          items:1,
      },
      768:{
          items:1,
          margin: -285,
      },
      1200:{
          items:3,
          margin: 0,
      }
  }
})

let reviewCard = document.querySelector('.reviews__slider');

function clickMoreText(e) {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;

  if (target.nodeName === 'A') {
    let more = target.parentNode.querySelector('.reviews__card-more-text');
    more.classList.toggle('reviews__active');

    if (more.classList.contains('reviews__active')) {
      target.textContent = '(Сховати)';
      target.parentNode.classList.remove('review__card-height');
      target.parentNode.classList.add('review__card-height-auto');
    } else {
      target.textContent = '(Читати далі)';
      target.parentNode.classList.remove('review__card-height-auto');
      target.parentNode.classList.add('review__card-height');
    }
  }
}

reviewCard.addEventListener('click', clickMoreText);

$(".header #scrollTo").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
})();
