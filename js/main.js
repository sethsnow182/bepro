$(document).ready(function(){
    var submitIcon = $('.searchbar-icon');
    var inputBox = $('.searchbar-input');
    var searchbar = $('.searchbar');
    var isOpen = false;

    submitIcon.click(function() {
        if(isOpen == false) {
        searchbar.addClass('searchbar-open');
        inputBox.focus();
        isOpen = true;
         } else {
        searchbar.removeClass('searchbar-open');
        inputBox.focusout();
        isOpen = false;
    }
    });

    submitIcon.mouseup(function(){
    return false;
    });
    searchbar.mouseup(function(){
    return false;
    });
    $(document).mouseup(function(){
    if(isOpen == true){
    $('.searchbar-icon').css('display','block');
    submitIcon.click();
    }
    });

    });
    
    function buttonUp(){
    var inputVal = $('.searchbar-input').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
    $('.searchbar-icon').css('display','none');
    } else {
    $('.searchbar-input').val('');
    $('.searchbar-icon').css('display','block');
    }
    }


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