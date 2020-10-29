// Footer Date
document.getElementById('year').innerHTML = new Date().getFullYear();

// Disable Scroll on Hamburger Click
document.addEventListener("DOMContentLoaded", () => {
	let hamBurger = document.querySelector(".hamburger");

	// On click
	hamBurger.addEventListener("click", function() {
		// disable body scroll
		document.body.classList.toggle('noScroll');
	});
});
