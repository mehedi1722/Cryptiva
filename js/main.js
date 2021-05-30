$(document).ready(function(){
    // type js 
    var typed = new Typed('.type_content', {
        strings: [
            'Security',
            'Protection',
            'Company'
            ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 100
    });

    // counter js 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // owl carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        responsive: {
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            576: {
                items: 1,
            },
            375: {
                items: 1,
            },
            360: {
                items: 1,
            },
            320:{
                items: 1
            }
        }

    });

    // wow js 

    var wow = new WOW(
        {
          boxClass:     'wow',      
          animateClass: 'animated', 
          offset:       0,          
          mobile:       true,       
          live:         true,       
          scrollContainer: null,    
          resetAnimation: true
        }
      );
      wow.init();
  
});