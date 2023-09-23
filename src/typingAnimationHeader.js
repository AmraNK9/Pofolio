import "./components/typingAnimation.js";
import "https://unpkg.com/scrollreveal";
import "./components/loader.js";
import { timeout } from "./components/loader.js";
import { animateNumber } from "./components/numberAnimation.js";
//config
var configForReset = false;
var configForViewOffset = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
};

var slideUp = {
	distance: "50%",
	origin: "bottom",
	opacity: 0,
	// delay:400,
	// duration: 500,
	reset: configForReset,
	viewOffset: configForViewOffset,
};
var slideLeft = {
	distance: "200%",
	origin: "left",
	opacity: 0,
	// delay:400,
	duration: 500,
	reset: configForReset,
	viewOffset: configForViewOffset,
};
var slideRight = {
	distance: "200%",
	origin: "right",
	opacity: 0,
	// delay:400,
	// duration: 500,
	reset: configForReset,
	viewOffset: configForViewOffset,
};
var projectCard = document.querySelectorAll(".project-card");
document.addEventListener("DOMContentLoaded", () => {
	setTimeout(
		()=>{
			ScrollReveal().reveal(projectCard[0], slideLeft);
			ScrollReveal().reveal(projectCard[1], slideRight);
			ScrollReveal().reveal(projectCard[2], slideUp);
		
			ScrollReveal().reveal(".paragraph", {reset:true,origin:"bottom",	distance: "50%"}
			);
		
			ScrollReveal().reveal(".skills", {
				viewOffset: configForViewOffset,
				reset: configForReset,
				afterReset: removeClass,
			});
		
			ScrollReveal().reveal(".skills", {
				viewOffset: configForViewOffset,
				reset: configForReset,
				afterReveal: AddClass,
			});
			ScrollReveal().reveal("#project", {
				viewOffset: configForViewOffset,
				reset: configForReset,
				afterReset:()=>{
					document.querySelector("#project").innerHTML = "0"
				} ,
			});
		
			ScrollReveal().reveal("#project", {
				viewOffset: configForViewOffset,
				reset: true,
				afterReveal: ()=>{
					AnimateAll(200)
				}
			});
		},timeout
	)
		
	

});

function AddClass() {
	document.querySelector(".php").classList.add("w-80");
	document.querySelector(".c-sharp").classList.add("w-40");
	document.querySelector(".js").classList.add("w-90");
	document.querySelector(".html").classList.add("w-70");
	document.querySelector(".css").classList.add("w-70");
	document.querySelector(".vue").classList.add("w-60");
	document.querySelector(".laravel").classList.add("w-50");


}
function removeClass() {
	document.querySelector(".php").classList.remove("w-80");
	document.querySelector(".c-sharp").classList.remove("w-40");
	document.querySelector(".js").classList.remove("w-90");
	document.querySelector(".html").classList.remove("w-70");
	document.querySelector(".css").classList.remove("w-70");
	document.querySelector(".vue").classList.remove("w-60");
	document.querySelector(".laravel").classList.remove("w-50");
}

function AnimateAll(speed){
	animateNumber("project",18,speed);
	animateNumber("meeting",33,speed);
	animateNumber("pataners",20,speed);


}

