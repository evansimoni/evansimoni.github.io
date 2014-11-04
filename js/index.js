console.log('index.js loaded')
//Parallax effect

$objWindow = $(window);
$('div[data-type="background"]').each(function(){
  var $bgObj = $(this);
  $(window).scroll(function() {
    var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));

    var coords = '100% ' + yPos + 'px'; 
    // Animate background
    $bgObj.css({ backgroundPosition: coords });
  });
});

// Animates scroll waypoints

$(".projects-link").on("click", function(e) {
    $('body').animate({scrollTop:$("#projects").offset().top},500);
    return false;
});
