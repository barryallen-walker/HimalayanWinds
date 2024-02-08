jQuery(document).ready(function(){
	
  // image preview with slider Lightbox
  // jQuery('[data-fancybox="gallery"]').fancybox({
  //   buttons: 
  //   [ 
  //       "slideShow", 
  //       "thumbs", 
  //       "zoom", 
  //       "fullScreen", 
  //       "share", 
  //       "close" 
  //   ], 
  //   loop: false, 
  //   protect: true,
  //   afterLoad : function(instance, current) {
  //     instance.update();

  //   }
  // });
  
  jQuery('.slick_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  
  jQuery('.slick_slider_three').slick({
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    fade: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  jQuery('.slick_slider_four').slick({
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    fade: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});