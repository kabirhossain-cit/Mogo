$(document).ready(function(){
//    banner-slider
$('.banner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            speed:2000,
            fade: true,
            arrows:false,
          });
    // about part slider
    $('.about-main').slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 1200,
      speed: 1600,
      centerPadding: '0px',
      arrows:false,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
// typed js
$(".typed").typed({
  strings: ["Developers.", "Designers.", "People."],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 15,
  // time before typing starts
  startDelay: 1000,
  // backspacing speed
  backSpeed: 5,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: Infinity,
  // false = infinite
  loopCount: 10,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});


// counter up part
$('.counter').counterUp({
  delay: 50,
  time: 2000
});
// feedback part
$('.feedback').slick({
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1400,
  pauseOnHover: true,
  speed: 2000,
  arrows: true,
  prevArrow: '.left',
  nextArrow: '.right',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
// feedback2 part
$('.feedback2').slick({
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1400,
  pauseOnHover: true,
  speed: 2000,
  arrows: true,
  prevArrow: '.left2',
  nextArrow: '.right2',
});
// team part slider
$('.team-main').slick({
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 1200,
  speed: 1700,
  centerPadding: '0px',
  arrows:false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

// brand part slider
$('.brand-main').slick({
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 1200,
  speed: 1700,
  centerPadding: '0px',
  arrows:false,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    }
  ]
});
// venobox
$('.venobox').venobox(); 
 
// venobox
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'fold'
});

// blog part slider

$('.blog-main').slick({
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 1200,
  speed: 1700,
  centerPadding: '0px',
  arrows:false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

// back-to-top
$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop:0}, 1400);
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 200){
    $('.back-to-top').fadeIn('500');
  }
  else{
    $('.back-to-top').fadeOut('500');
  }

  if(scrolling > 10){
    $('.navbar').addClass('bg');
  }
  else{
    $('.navbar').removeClass('bg');
  }
});


// Select all links with hashes
$('.navbar a')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-80
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });





});