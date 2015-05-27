var main = function() {
  
  $("button").on("click", function(){
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
    $("button").addClass("ontzichtbaar");
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
    $("button").addClass("ontzichtbaar");
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
    $("button").addClass("ontzichtbaar");
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
    $("button").addClass("ontzichtbaar");
    $(".klik").css("display", "none");
  });
};

$("document").ready(main);