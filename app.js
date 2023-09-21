document.querySelectorAll(".navButton").forEach((icon) => {
	icon.addEventListener("click", (e) => {
		document.querySelectorAll(".navButton").forEach((icon) => {
			if (icon.className.includes("active")) {
				icon.classList.remove("active");
			}
		});

		if (e.target.className.includes("navButton")) {
			e.target.classList.add("active");
		} else {
			e.target.parentElement.classList.add("active");
		}
	});
});

//config

function WhatWindow() {
	let isOpen = "";
	if (window.window.innerWidth < 600) {
		isOpen = false;
	} else {
		document.querySelector(".fa-bars").classList.add("rotate");
		isOpen = true;
	}
	return isOpen;
}
let isOpen = WhatWindow();

console.log(isOpen)

document.querySelector(".fa-bars").addEventListener("click", function () {
	document.querySelector(".fa-bars").classList.toggle("rotate");

	if (isOpen) {
		document.querySelector(".container").style.marginLeft = "30px";
		document.querySelector(".sideNav").style.marginLeft = "-100px";
		document.querySelector(".fa-bars").style.marginLeft = "10px";
		isOpen = false;
	} else {
		document.querySelector(".container").style.marginLeft = "120px";
		document.querySelector(".sideNav").style.marginLeft = "0px";
		document.querySelector(".fa-bars").style.marginLeft = "100px";
		isOpen = true;
	}
});
