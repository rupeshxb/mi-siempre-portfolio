
// ----------- Toggle navbar on clcking hamburger starts --------------- //

(function ($) {
  $(".main-menu > ul > li:has(ul)").addClass("hassub");
  $(".hassub").append('<i class="fas fa-chevron-down"></i>	');

  $(".hamburger").on("click", function () {
    $("body").addClass("showSide-menu");
    $(".black-layer").fadeIn(400);
  });

  $(".showSide-menu .hamburger ").on("click", function () {
    $("body").removeClass("showSide-menu");
    $(this).fadeOut(400);
  });

  $("#btn--chat-call").click(function () {
    $(".mesgs").toggle();
  });

  $("#action_menu_btn").click(function () {
    $(".mesgs").hide();
  });
})(jQuery);

// ----------- Toggle navbar on clcking hamburger ends --------------- //

// ------- Dynamic, shrinking navbar ----------------- //

window.onscroll = function () {
  scrollNavbar();
};

function scrollNavbar() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.padding = "6px 0px";
    document.getElementById("header").style.backgroundColor = "#000000";
    document.getElementById("header").style.transition = "400ms";
    document.getElementById("get-appoint-btn").style.padding = "16px 30px";
    document.getElementById("get-appoint-btn").style.borderRadius = "0px";
    document.getElementById("get-appoint-btn").style.transition = "400ms";
    document.getElementById("navbar-logo").style.width = "150px";
    document.querySelector(".hero-banner #header .logo").style.borderRadius = "100%";
    // var listOfAnchorOnNavbar = document.querySelectorAll(".site-nav > div > ul > li > a");
    // for (var i=0; i<listOfAnchorOnNavbar.length;i++){
    //   listOfAnchorOnNavbar[i].style.color = "black";
    // }
    var allLists = document.querySelectorAll(".site-nav > div > ul > li");
    for (var i = 0; i < allLists.length; i++) {
      allLists[i].style.height = "50px";
    }
  }
  else {
    document.getElementById("navbar-logo").style.width = "175px";
    document.getElementById("header").style.padding = "15px 0px";
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("get-appoint-btn").style = "none";
    var listOfAnchorOnNavbar = document.querySelectorAll(".site-nav > div > ul > li > a");
    for (var i=0; i<listOfAnchorOnNavbar.length;i++){
      listOfAnchorOnNavbar[i].style.color = "white";
    }
  }
}

// ------- Dynamic, shrinking navbar ----------------- //

/* ------- Load typewriter effect only after page has loaded starts ------------ */

window.onload = function(){
  var typewriterElement = document.querySelector(".typewriter");
  typewriterElement.classList.add("my-intro");
}

/* ------- Load typewriter effect only after page has loaded ends ------------ */




