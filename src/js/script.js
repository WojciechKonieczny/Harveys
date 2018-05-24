// smooth scroll
function smoothScroll()
{
   $(document).on('click', 'a[href^="#"]', function(e) {
      var id = $(this).attr('href');
      var $id = $(id);
      if ($id.length === 0) 
      {
          return;
      }
      e.preventDefault();
      var pos = $id.offset().top;
      $('body, html').animate({scrollTop: pos});
   });
}

// hamburger menu
function hamburgerMenu()
{
   const nav = document.querySelector('.menu');
   const hamburger = document.querySelector('.hamburger');

   hamburger.addEventListener('click', function() {
       // add class to responsive
      nav.classList.toggle('to-responsive');

      // when to display the close button
      if(!(hamburger.classList.contains('close')))
      {
        hamburger.classList.add('close');
        console.log('działa');
      }
      
      // when to hide the close button
      else
      {
          hamburger.classList.remove('close');
      }
});
}

function toLoaded()
{
    const aboutUs = document.querySelector("#about-us");

    $(aboutUs).on('load', function() {
        console.log('dsa');
    });
}

//load functions, if document is ready
$(function() {
   hamburgerMenu();
   smoothScroll();
   toLoaded();
});
