$(function () {

  AOS.init();
  $(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
  });

  /* %%%%%%%%%%%%%%%%%%%%%%%%%%.......BLOG PAGE.......%%%%%%%%%%%%%%%%%%%%%%%%%%% */

  $('.search-popUp').fadeOut();
  $("#main-search-icon").click(function () {
    $('.search-popUp').animate({
      left: "0",
    });
    $('.search-popUp').fadeIn();
  });



  /* %%%%%%%%%%%%%%%%%%%%%%%%%%.......BLOG PAGE END.......%%%%%%%%%%%%%%%%%%%%%%%%%%% */

  $('#main-search-engine').click(function () {
    $(this).css('color', '#858585')
  })

  $(window).scroll(function () {

    if ($(this).scrollTop() > 200) {
      $('#scroll-top').fadeIn();
    }
    else {
      $('#scroll-top').fadeOut();
    }
  })
  $('#scroll-top').click(function () {
    $('html,body').animate(
      { scrollTop: 0 },
      700);

  })


  /* %%%%%%%%%%%%%%%%%%%%%%%%%%.......HOME PAGE.......%%%%%%%%%%%%%%%%%%%%%%%%%%% */

  $('.search-popUp').fadeOut();
  $("#main-search-icon").click(function () {
    $('.search-popUp').animate({
      left: "0",
    });
    $('.search-popUp').fadeIn();
  });

  $("#cross-icon").click(function () {
    // $('.search-popUp').animate({
    //   left:"-1800px",
    // });
    $('.search-popUp').fadeOut();
  });

  if($('.gallary').length > 0){
    $('.gallary').slick();
  }
  
 if($('.category-slider').length > 0){
    $('.category-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      dots: false

    });
}
if($('.riders').length > 0){  
$('.riders').slick({
    arrows: false,
    dots: false,

    centerMode: true,

    centerPadding: '2px',
    autoplay: true,
    autoplayspeed: 300,
    slidesToShow: 3,

  });
}
if($('.tmslider').length > 0){  
$('.tmslider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3
  });
}

  $('.blog-wrapper').hover(function () {
    $(this).find('#blog-img').stop().animate({ 'opacity': 0.3 }, 800)
  }, function () {
    $(this).find('#blog-img').stop().animate({ 'opacity': 1 }, 800)
  })


  $('#signup-email').click(function () {
    $(this).css('color', '#858585')
  })

  if ($('#newsform').length > 0) {

    $("#newsform").validate({
      rules: {
        email: "required",
      },

      messages: {

        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@gmail.com"
        },


      },

      submitHandler: function (form) {
        console.log('test');

        swal("SUBMITTED", "Stay updated with new rides", "success"
        ).then(function () {
          form.submit();
        });
      },



    });
  }

  $('.blog-wrapper').hover(function () {
    $(this).find('#blog-img').stop().animate({ 'opacity': 0.3 }, 800)
  }, function () {
    $(this).find('#blog-img').stop().animate({ 'opacity': 1 }, 800)
  })





  /* %%%%%%%%%%%%%%%%%%%%%%%%%%.......ABOUT PAGE.......%%%%%%%%%%%%%%%%%%%%%%%%%%% */

  if($("#elementor-accordion").length > 0){
    $("#elementor-accordion").accordion();
  }
  
  if($("#accordion1").length > 0){
    $("#accordion1, #accordion2").accordion();
  }
  


  $(window).scroll(function () {
    var position = $(document).scrollTop();
    //console.log(position)
    if ((position > 80) && (position < 250)) {
      $('#about-h2-1').addClass('animated fadeInUp');
    }
    if ((position > 200) && (position < 500)) {
      $('#about-intro-para').addClass('animated fadeInUp');
    }
    if ((position > 390) && (position < 600)) {
      $('#about-btn-1').addClass('animated fadeInUp');
    }
    if ((position > 500) && (position < 1200)) {
      $('#about-img1').addClass('animated slideInLeft');
    }
    if ((position > 1050) && (position < 2200)) {
      $('#about-img2').addClass('animated slideInLeft');
    }
    if ((position > 1700) && (position < 2400)) {
      $('#about-h2-2').addClass('animated fadeInUp');
    }
    if ((position > 1950) && (position < 2400)) {
      $('#about-activity').addClass('animated fadeInUp');
      $('#about-h2-3').addClass('animated fadeInUp');
    }
    if ((position > 2070) && (position < 2400)) {
      $('#featured-box-1').addClass('animated fadeInUp');
    }
    if ((position > 2110) && (position < 2500)) {
      $('#featured-box-2').addClass('animated fadeInUp');
    }
    if ((position > 2140) && (position < 2460)) {
      $('#featured-box-3').addClass('animated fadeInUp');
    }
    if ((position > 2650) && (position < 2800)) {
      $('#about-btn-2').addClass('animated fadeInUp');
    }
    if ((position > 2850) && (position < 3000)) {
      $('#counter-wrapper').addClass('animated fadeInUp');
    }
    if ((position > 3150) && (position < 3200)) {
      $('#about-benefits').addClass('animated fadeInUp');
    }
    if ((position > 3190) && (position < 3400)) {
      $('#about-h2-4').addClass('animated fadeInUp');
    }
    if ((position > 3250) && (position < 4000)) {
      $('#about-img3').addClass('animated slideInLeft');
    }
    if ((position > 4000) && (position < 4700)) {
      $('#elementor-accordion-wrapper').addClass('animated fadeInUpBig');
    }
    if ((position > 4700) && (position < 5500)) {
      $('.news-and-posts').addClass('animated fadeInUpBig');
    }
    if ((position > 5100) && (position < 5500)) {
      $('#ride-with-us').addClass('animated fadeInUpBig');
    }

    /* %%%%%%%%%%%%%%%%%%%%%%%%%%.......HOME PAGE ANimatioin.......%%%%%%%%%%%%%%%%%%%%%%%%%%% */

    if ((position > 130) && (position < 680)) {
      $('#crew-gallary').addClass('animated slideInLeft');
    }
    if ((position > 800) && (position < 1020)) {
      $('#rider-text').addClass('animated fadeInUp');
    }
    if ((position > 1630) && (position < 2000)) {
      $('#story-1').addClass('animated slideInLeft');
      $('#story-2').addClass('animated slideInRight');
    }
    if ((position > 2150) && (position < 2570)) {
      $('#feedback').addClass('animated slideInRight');
    }
    if ((position > 2750) && (position < 2900)) {
      $('#bikes-detailes').addClass('animated fadeInUp');
    }
    if ((position > 4000) && (position < 4200)) {
      $('#newsletter-form').addClass('animated slideInLeft');
    }











    if (position > 3200) {
      if ($('.counter').length > 0) {
        $('.counter').each(function () {
          var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 5000,
            step: function (func) {
              $(this).text(parseFloat(func).toFixed(size));
            }
          });
        });
      }
    }


  })


  /* %%%%%%%%%%%%%%%%%%%%%%%%%%.......SHOP PAGE.......%%%%%%%%%%%%%%%%%%%%%%%%%%% */

  $("#price-range").slider({
    range: true,
    min: 0, max: 2000,
    values: [0, 2000],
    slide: function (event, ui) {
      $("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });

  $("#priceRange").val(
    "$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1)
  );

  $("#select-selected").selectmenu();

  $('#search-engine').click(function () {
    $(this).css('color', '#858585')
  })



  /* %%%%%%%%%%%%%%%%%%%%%%%%%%.......UPCOMING EVENTS......%%%%%%%%%%%%%%%%%%%%%%%%%%% */
if($('.countdown-clock').length > 0){


  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date('June 17, 2020 00:00:00').getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    }, second)
  }
  if ($('#iframe').length > 0) {
    $('#iframe').fancybox();
  }

  /* %%%%%%%%%%%%%%%%%%%%%%%%%%.......UPCOMING EVENTS......%%%%%%%%%%%%%%%%%%%%%%%%%%% */

  if ($("#contactform").length > 0) {
    $("#contactform").validate({
      rules: {
        name: "required",

        email: "required",
        msg: "required",
        phone: {
          required: true,
          number: true

        },
      },
      messages: {
        name: "Please specify your name",
        msg: "Please enter your message",
        phone: "please enter a valid phone no",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@gmail.com"
        },


      },

      submitHandler: function (form) {
        console.log('test');

        Swal.fire({
          title: 'THANK YOU!',
          text: 'We will contact you soon',
          imageUrl: 'assets/images/bike_1.jpg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',

        }).then(function () {
          form.submit();
          //window.location = "redirectURL";
          //alert("asdsdf")
        });


      },



    });
  }





});


