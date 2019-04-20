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
})();
