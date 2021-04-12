// Every JS file needs to start with $(document)

$(document).ready(function(){

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
  

const swiper = new Swiper('.swiper-container', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



});
