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

// ------- Dynamic, shrinking navbar ----------------- //

window.onscroll = function () {
  scrollNavbar();
};

function scrollNavbar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "0px 0px";
    document.getElementById("header").style.backgroundColor = "#DBD5C9";
    document.getElementById("header").style.transition = "400ms";
    document.getElementById("get-appoint-btn").style.padding = "16px 30px";
    document.getElementById("get-appoint-btn").style.borderRadius = "0px";
    document.getElementById("get-appoint-btn").style.transition = "400ms";
    document.getElementById("navbar-logo").style.width = "150px";
    document.querySelector(".hero-banner #header .logo").style.borderRadius = "100%";
    var listOfAnchorOnNavbar = document.querySelectorAll(".site-nav > div > ul > li > a");
    for (var i=0; i<listOfAnchorOnNavbar.length;i++){
      listOfAnchorOnNavbar[i].style.color = "black";
    }
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

/**
 * @author san randry
 * @license MIT license
 * this plugin disable all inspect element feature on a web browser
 */
// disable right click
document.oncontextmenu = function (e) {
  e.preventDefault()
  return false;
}
// disable somme additional key
document.onkeydown = function (e) {
  // disable f12
  if (event.keyCode == 123) {
      return false;
  }
  // disable ctrl+shift+I
  if (e.ctrlKey && e.shiftKey && e.keycode == 'I'.charCodeAt(0)) {
      return false;
  }
  // disable ctrl+shift+C
  if (e.ctrlKey && e.shiftKey && e.keycode == 'C'.charCodeAt(0)) {
      return false;
  }
  // disable ctrl+shift+j
  if (e.ctrlKey && e.shiftKey && e.keycode == 'J'.charCodeAt(0)) {
      return false;
  }
  // disable ctrl+shift+U
  if (e.ctrlKey && e.keycode == 'U'.charCodeAt(0)) {
      return false;
  }
}

