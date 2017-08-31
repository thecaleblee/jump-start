document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOMContentLoaded!')
});

function stickyFooterInit(element) {
  var $stickyFooter = $(element);
  var footerHeight = $stickyFooter.height();
  var distanceToBottomOfPage = window.innerHeight;
  var elementOffSet = $stickyFooter.offset().top;

  if ( distanceToBottomOfPage > ( elementOffSet + footerHeight ) ) {
    $stickyFooter.addClass('sticky bottom');
  } else {
    $stickyFooter.removeClass('sticky bottom');
  }
}


(function() {
  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();
     
       // length of delay
       }, 750);
    }
  }

  function actualResizeHandler() {
    console.log('I ran!');
    stickyFooterInit($('footer'));
  }

}());
