// Every JS file needs to start with $(document)

$(document).ready(function(){

  // Search Bar Code
/*
    //Call jQuery before below code
$('.main-btn').click(function() {
    $('.search-description').slideToggle(100);
  });
  $('.search-description li').click(function() {
    var target = $(this).html();
    var toRemove = 'By ';
    var newTarget = target.replace(toRemove, '');
    //remove spaces
    newTarget = newTarget.replace(/\s/g, '');
    $(".search-large").html(newTarget);
    $('.search-description').hide();
    $('.main-input').hide();
    newTarget = newTarget.toLowerCase();
    $('.main-' + newTarget).show();
  });
  $('#main-submit-mobile').click(function() {
    $('#main-submit').trigger('click');
  });
  $(window).resize(function() {
    replaceMatches();
  });
  
  function replaceMatches() {
    var width = $(window).width();
    if (width < 516) {
      $('.main-location').attr('value', 'City or postal code');
    } else {
      $('.main-location').attr('value', 'Search by city or postal code');
    }
  };
  replaceMatches();
  
  function clearText(thefield) {
    if (thefield.defaultValue == thefield.value) {
      thefield.value = ""
    }
  };
  
  function replaceText(thefield) {
    if (thefield.value == "") {
      thefield.value = thefield.defaultValue
    }
  };
*/


/* For sticky navbar*/
$('.js--section-search').waypoint(function(direction){
 
  if (direction == "down"){

      $('nav').addClass('sticky');

  } else {

     $('nav').removeClass('sticky');
 }
     
 }, {
     offset: '100px;'
});





/*-- Mobile navigation--*/
$('.js--nav-icon, .js--main-nav a, .logo').click(function(element){
 var nav = $('.js--main-nav');
 var icon = $('.js--nav-icon i');

 //Gets the class name of the element that triggered the event
 var clicked = element.target.className;

 //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
 if (icon.hasClass('ion-navicon-round') && clicked == 'logo')
     return;

 //Opens and closes the menu
 if ($(window).width() < 767){
     nav.slideToggle(200);
 }

 //Changes icon states of the menu button
 if (icon.hasClass('ion-navicon-round')) {
     icon.addClass('ion-close-round');
     icon.removeClass('ion-navicon-round');
 } else {
     icon.addClass('ion-navicon-round');
     icon.removeClass('ion-close-round');
 }
});


$(window).resize(function(){
 var nav = $('.js--main-nav');
 var icon = $('.js--nav-icon i');

 if ($(window).width() > 750){
     nav.css("display", "block");
     icon.addClass('ion-close-round');
     icon.removeClass('ion-navicon-round');
 } else {
     nav.css("display", "none");
     icon.addClass('ion-navicon-round');
     icon.removeClass('ion-close-round');
 }

});





/*__________________________________________________________________*/  
/* For SWIPER functionality */

const swiper1 = new Swiper('.swiper1', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination1',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.swiper2', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


});
