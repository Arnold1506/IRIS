// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 




$(function() {
	$("#card1 .block").on("click", function() {
		$("#card1 .info").toggleClass("active");
	});
});

$(function() {
	$("#card2 .block").on("click", function() {
		$("#card2 .info").toggleClass("active");
	});
});

$(function() {
	$("#card3 .block").on("click", function() {
		$("#card3 .info").toggleClass("active");
	});
});

// $( document ).ready(function() {
//   console.log( "ready!" );
// });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".main-header").classList.add("hactive");
  } else {
    document.querySelector(".main-header").classList.remove("hactive");
  }
} 