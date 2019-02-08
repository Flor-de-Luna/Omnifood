/* eslint-disable */
$(document).ready(function() {
    
    /* For the stikcy navigation */
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');     
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 500);
    });
    
     $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 250);
    });
    
    
    /* Logo scroll to the top */
    
    $('.top-of-page').click(function () {
        $('html, body').animate({scrollTop: $('.js--header').offset().top}, 250);
    });
    
    
    /* Navigation scroll was confusing AF used CSS instead  */
    
    
    /* Animations on scroll */    

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile Navigation */

    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav'); 
       var icon = $('.js--nav-icon i');
        
       nav.slideToggle(200);
       if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }
        
    });
    
      $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav'); 
       var icon = $('.js--nav-icon i');
        
       nav.slideToggle(200);
       if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }
        
    });
    
    
    
});

/*hidden comments*/