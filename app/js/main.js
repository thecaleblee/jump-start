$(document).ready(function(){
  
  console.log('document ready');

  createSlickCarousel($('.slick-carousel-container'), {
    imageCount: 4,
    placeHolder: {
      height: 300,
      width: 960,
      url: 'https://community-placekitten.p.mashape.com/'
    }
  });

  slickCarouselInit('carousel-one'); 
});
