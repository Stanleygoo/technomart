var cartbtn = document.querySelectorAll(".buy");
var feedbackbtn = document.querySelector(".feedback-btn");
var mapbtn = document.querySelector(".interactive-map");
var cart = document.querySelector(".cart-wrapper");
var feedback = document.querySelector(".feedback-wrapper");
var map = document.querySelector(".map-wrapper");
var close = document.querySelectorAll(".close-popup");


if (cartbtn) {
  for (var i = 0; i < cartbtn.length; i++) {
    cartbtn[i].addEventListener("click", function(event) {
      event.preventDefault();
      cart.classList.add("show-wrapper");
      cart.classList.remove("close-wrapper");
    });
  }

  for (var i=0; i < close.length; i++) {
    close[i].addEventListener("click", function(event) {
      event.preventDefault();
      cart.classList.remove("show-wrapper");
      cart.classList.add("close-wrapper");
    });
  };

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (cart.classList.contains("show-wrapper")) {
        cart.classList.remove("show-wrapper");
        cart.classList.add("close-wrapper");
      }
    }
  });
}

if (feedbackbtn) {
  feedbackbtn.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.add("show-wrapper");
    feedback.classList.remove("close-wrapper");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (feedback.classList.contains("show-wrapper")) {
        feedback.classList.remove("show-wrapper");
        feedback.classList.add("close-wrapper");
      }
    }
  });

  for (var i=0; i < close.length; i++) {
    close[i].addEventListener("click", function(event) {
      event.preventDefault();
      feedback.classList.remove("show-wrapper");
      feedback.classList.add("close-wrapper");
    });
  };
}

if (mapbtn) {
  mapbtn.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("show-wrapper");
    map.classList.remove("close-wrapper");
  });

  for (var i=0; i < close.length; i++) {
    close[i].addEventListener("click", function(event) {
      event.preventDefault();
      map.classList.remove("show-wrapper");
      map.classList.add("close-wrapper");
    });
  };

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (map.classList.contains("show-wrapper")) {
        map.classList.remove("show-wrapper");
        map.classList.add("close-wrapper");
      }
    }
  });
}
