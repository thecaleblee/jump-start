function createSlickCarousel(carouselData, options) {

  // set variables
  var $carousel = carouselData;
  var placeholder = options.placeHolder;

  // check to see if we need place holder images
  if (placeholder !== undefined) {
    // create place holder url
    var url = createPlaceholdItURL(placeholder.height, placeholder.width);

    // create image markup
    var image = '<img alt="Place Holder!" src="' + url + '" />';
    var slide = '<div>' + image + '</div>';

    for (var i = 0; i < options.imageCount; i++) {
      $('.slick-carousel-container').append(slide); 
    }
  }

  // initiate carousel
  $carousel.slick();
}



// function to create the placeholder image URL
function createPlaceholdItURL(height, width) {

  // set main url
  var url = 'http://via.placeholder.com/';

  // add width and height
  url = url + width + 'x' + height;

  return url;
}

function slickCarouselInit(carousel) {
  var $carousel = document.getElementById('carousel-one');

  var placeholder = $carousel.attr('["data-carousel-placeholder"]');

  console.log('$carousel: ', $carousel);
}
