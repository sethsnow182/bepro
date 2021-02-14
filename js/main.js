//Search Toggle Input by Me!
$( document ).ready(function() {

$('.form-search').addClass('closed');

$('.search').click(function() {
    if ($('.form-search').hasClass('closed')) {
      $('.form-search').removeClass('closed').addClass('opened');
      $(".text").addClass("display");
      $('input.seabutton').attr('type', "button");
  } else if ($('.form-search').hasClass('opened') &&  ($('.text').val() == ""))  {
      $('.form-search').addClass('closed').removeClass('opened');
      $(".text").removeClass("display");
      $('input.seabutton').attr('type', "button");

  } else  {
      $('input.seabutton').attr('type', "submit");
  
  }

});

});


    // jQuery More or Less Toggle
    // The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.

    $('.button').click(function() {
    if ($('.button').text() == "load more") {
      $(this).text("load less")
    } else {
      $(this).text("load more")
    }
    $(".products-hidden").slideToggle();
  });

  // Pure JavaScript More or Less

  // var button = document.querySelector(".button");
  
  // button.onclick = function() {

  //   var elems = document.getElementsByClassName('products hidden');

  //   for (var i=0;i<elems.length;i+=1){
      
  //     if (elems[i].style.display == 'grid') {
  //       elems[i].style.display = 'none';
  //       button.innerHTML = "load more"

  //     } else {

  //       elems[i].style.display = 'grid';
  //       button.innerHTML = "load less"
  //     }
  //   }
  // };


 var swiper = new Swiper('.swiper-container', {
      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
        },
        
         // when window width is >= 480px
        580: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        992: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        1300: {
          slidesPerView: 4,
        }
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


//Toggle button

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  const navsNew = document.querySelectorAll('.search-list')
  const tog = document.querySelectorAll('.home')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  navsNew.forEach(nav => nav.classList.toggle('Navbar__ToggleShowSecond'));
  tog.forEach(nav => nav.classList.toggle('Navbar__ToggleShowHead'));


}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

  
//Scrol to up button

// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 500) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}