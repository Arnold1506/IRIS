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

$(function () {
  $("#card1 .block").on("click", function () {
    $("#card1 .info").toggleClass("active");
  });
});

$(function () {
  $("#card2 .block").on("click", function () {
    $("#card2 .info").toggleClass("active");
  });
});

$(function () {
  $("#card3 .block").on("click", function () {
    $("#card3 .info").toggleClass("active");
  });
});

// $( document ).ready(function() {
//   console.log( "ready!" );
// });

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".main-header").classList.add("hactive");
  } else {
    document.querySelector(".main-header").classList.remove("hactive");
  }
}

var info1 = document.querySelector("#info1");
var card1 = document.querySelector("#card1");
var info2 = document.getElementById("info2");
var card2 = document.getElementById("card2");
var info3 = document.getElementById("info3");
var card3 = document.getElementById("card3");
var footer=document.querySelector('.main-footer');
// t1.from(info1,{
// 	display:'none',
// 	opacity:'0',
// 	top:'150%'
// })

// t1.to(info1, {
//   display: "block",
//   opacity: "1",
//   top: "50%",
// });

// t2.to(info2, {
//   display: "block",
//   opacity: "1",
//   top: "50%",
// });

// t3.to(info3, {
//   display: "block",
//   opacity: "1",
//   top: "50%",
// });

card1.addEventListener("mouseenter", () => {
  gsap.to(info1, {
	ease: "power2.inOut",
    display: "block",
    opacity: "1",
    top: "50%",
  });
});

card1.addEventListener("mouseleave", () => {
	gsap.to(info1, {
		ease: "power2.inOut",
		// display: "none",
		opacity: "0",
		top: "150%",
	  });
});

card2.addEventListener("mouseenter", () => {
	gsap.to(info2, {
	  ease: "power2.inOut",
	  display: "block",
	  opacity: "1",
	  top: "50%",
	});
  });
  
  card2.addEventListener("mouseleave", () => {
	  gsap.to(info2, {
		  ease: "power2.inOut",
		  display: "none",
		  opacity: "0",
		  top: "150%",
		});
  });

  card3.addEventListener("mouseenter", () => {
	gsap.to(info3, {
	  ease: "power2.inOut",
	  display: "block",
	  opacity: "1",
	  top: "50%",
	});
  });
  
  card3.addEventListener("mouseleave", () => {
	  gsap.to(info3, {
		  ease: "power2.inOut",
		  display: "none",
		  opacity: "0",
		  top: "150%",
		});
  });

  footer.addEventListener("mouseenter",()=>{
	  gsap.to(".footer-head",{

	  })
  })

  var navlist=document.querySelector('.main-nav__items');
  var button=document.querySelector('.toggle-button');

  button.addEventListener("click",()=>{
	  navlist.classList.toggle("show-items")
  })