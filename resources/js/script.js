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
