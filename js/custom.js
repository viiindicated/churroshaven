
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });


    // TESTIMONIALS CAROUSEL

    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });

  var myicon = document.querySelector('#icon');


$(document).ready(function() {
    $('#icon').click(function() {
      $('body').addClass('grey-bg');
    });
  });
  




// icon

$(document).ready(function() {
    $("#icon").click(function() {
      $(this).toggleClass("clicked"); // Toggle clicked class
      $("body").toggleClass("dark-theme"); // Toggle dark theme for the body
    });
  });
  





// scroll to top

function scrollToTop() {
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}









// dark and light icon

myicon.onclick = function(){
    document.body.classList.toggle('dark-theme');


    if(document.body.classList.contains('dark-theme')){
        myicon.src = "./images/Floating Image/floating_image_sun.png";
    }else{
        myicon.src = "./images/Floating Image/floating_image_moon.png";
    }
}

// transition of icon
$(document).ready(function() {
    $('#icon').click(function() {
      $(this).toggleClass('clicked');
    });
  });
  
// paragraph


// password






  

