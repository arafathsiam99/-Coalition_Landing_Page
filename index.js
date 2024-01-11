// Carsoul logic was found here: https://codepen.io/Brayheart/pen/GRGPKRX
// Accordion logic was found here: https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$('.item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
        }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });
  
  $(".carousel").swipe({
  
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
  
    },
    allowPageScroll:"vertical"
  
  });