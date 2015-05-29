var main = function() {
  
  $(".clickfm").on("click", function(){
    $("body").addClass("extrabody");
    $(".nav").removeClass("ontzichtbaar");
    $(".cr").addClass("ontzichtbaar");
    $(".foto1").addClass("ontzichtbaar");
    $(".fb").addClass("ontzichtbaar");
    $(".instagram").addClass("ontzichtbaar");
    $(".header").addClass("ontzichtbaar");
    $(".kaderportfolio").addClass("ontzichtbaar");
    $(".kaderaboutme").addClass("ontzichtbaar");
    $(".header2").removeClass("ontzichtbaar");
    $(".clickfm").addClass("ontzichtbaar");
    $(".klik").css("display", "none");
  });

$(".portfolio").on("click", function(){
    $("body").addClass("extrabody");
    $(".nav").removeClass("ontzichtbaar");
    $(".cr").addClass("ontzichtbaar");
    $(".foto1").addClass("ontzichtbaar");
    $(".fb").addClass("ontzichtbaar");
    $(".instagram").addClass("ontzichtbaar");
    $(".header").addClass("ontzichtbaar");
    $(".kaderportfolio").removeClass("ontzichtbaar");
    $(".kaderaboutme").addClass("ontzichtbaar");
    $(".header2").removeClass("ontzichtbaar");
    $(".clickfm").addClass("ontzichtbaar");
    $(".klik").css("display", "none");
  });

$(".aboutme").on("click", function(){
    $("body").addClass("extrabody");
    $(".nav").removeClass("ontzichtbaar");
    $(".cr").addClass("ontzichtbaar");
    $(".foto1").addClass("ontzichtbaar");
    $(".fb").addClass("ontzichtbaar");
    $(".instagram").addClass("ontzichtbaar");
    $(".header").addClass("ontzichtbaar");
    $(".kaderportfolio").addClass("ontzichtbaar");
    $(".kaderaboutme").removeClass("ontzichtbaar");
    $(".header2").removeClass("ontzichtbaar");
    $(".clickfm").addClass("ontzichtbaar");
    $(".klik").css("display", "none");
  });

 $(".home").on("click", function(){
    $("body").addClass("extrabody");
    $(".nav").removeClass("ontzichtbaar");
    $(".cr").addClass("ontzichtbaar");
    $(".foto1").addClass("ontzichtbaar");
    $(".fb").addClass("ontzichtbaar");
    $(".instagram").addClass("ontzichtbaar");
    $(".header").addClass("ontzichtbaar");
    $(".kaderportfolio").addClass("ontzichtbaar");
    $(".kaderaboutme").addClass("ontzichtbaar");
    $(".header2").removeClass("ontzichtbaar");
    $(".clickfm").addClass("ontzichtbaar");
    $(".klik").css("display", "none");
  });

$('.slideshow').on('click', function() {
    if ($('.fotoportfolio1').hasClass('selected')) {
        $('.fotoportfolio1').fadeOut(200, function (){
            $('.fotoportfolio1').removeClass('selected'); 
            $('.fotoportfolio2').fadeIn(200, function (){
            $('.fotoportfolio2').addClass('selected'); 
            });
        });
    }
    else if ($('.fotoportfolio2').hasClass('selected')) {
        $('.fotoportfolio2').fadeOut(200, function (){ 
            $('.fotoportfolio2').removeClass('selected');
            $('.fotoportfolio3').fadeIn(200, function (){
            $('.fotoportfolio3').addClass('selected');
            });
        });
    }
    else {
        $('.fotoportfolio3').fadeOut(200, function (){ 
            $('.fotoportfolio3').removeClass('selected');
            $('.fotoportfolio1').fadeIn(200, function (){
            $('.fotoportfolio1').addClass('selected');
            });
        });
    }
  });


};

$("document").ready(main);