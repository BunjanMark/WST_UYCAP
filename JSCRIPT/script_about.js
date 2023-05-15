window.addEventListener("scroll", function () {
	var navbar = document.querySelector("nav");

	if (window.scrollY > 75) {
		navbar.style.backgroundColor = "#333";
		navbar.style.color = "#fff"; // Set the font color to white
		navbar.style.transition = "background-color 0.5s ease-in-out";

		// Change the anchor tag color to white for all links in the nav-links class
		var navLinks = document.querySelectorAll(".nav-links li a");
		for (var i = 0; i < navLinks.length; i++) {
			navLinks[i].style.color = "#fff";
		}
	} else {
		navbar.style.backgroundColor = "rgba(255, 255, 250, 0.7)";
		navbar.style.color = "#000"; // Set the font color to black
		navbar.style.transition = "background-color 0.5s ease-in-out";

		// Change the anchor tag color back to black for all links in the nav-links class
		var navLinks = document.querySelectorAll(".nav-links li a");
		for (var i = 0; i < navLinks.length; i++) {
			navLinks[i].style.color = "#000";
		}
	}
});

function myFunction_to_rotate(x) {
	x.classList.toggle("change");
	var navLinks = document.querySelector(".nav-links");
	navLinks.classList.toggle("show");
}

//hides search-form

function myFunction() {
	var navLinks = document.querySelector(".nav-links");
	var logo = document.querySelector(".logo");
	var searchForm = document.querySelector(".search-form");

	if (window.innerWidth < 839) {
		// Execute the code when viewport width is less than 839px
		if (navLinks.style.display === "") {
			navLinks.style.display = "flex";
			logo.style.display = "none";
			searchForm.style.display = "flex";
		} else {
			navLinks.style.display = "";
			logo.style.display = "block";
			searchForm.style.display = "none";
		}
	} else if (window.innerWidth >= 839 && window.innerWidth <= 890) {
		// Execute the code when viewport width is between 839px and 890px
		navLinks.style.display = "flex";
		logo.style.display = "block";
		searchForm.style.display = "none";
	} else {
		// Execute the code when viewport width is greater than 890px
		navLinks.style.display = "flex";
		logo.style.display = "block";
		searchForm.style.display = "flex";
		// Show the search form regardless of the hamburger menu state
		searchForm.style.display = "flex";
	}
}

window.addEventListener("resize", myFunction);
// Add event listener for the resize event
window.addEventListener("resize", showNavLinksAndSearchForm);

// Call the function initially to set the correct display property
showNavLinksAndSearchForm();
//
//
//

function changeLogoSrc() {
	var logo = document.querySelector(".logo img");
	if (window.scrollY > 170) {
		logo.src = "/IMAGES/Logowhite.png"; // Change the image source to Logo2.png
	} else {
		logo.src = "/IMAGES/Logo.png"; // Change the image source back to Logo.png
	}
}

// Call the changeLogoSrc function on the scroll event
window.addEventListener("scroll", changeLogoSrc);

// Get the search form element
var searchForm = document.querySelector(".search-form");

// Get the logo element
var logoElement = document.querySelector(".logo");

// Function to insert the search form element after the logo element
function insertSearchForm() {
	logoElement.insertAdjacentElement("afterend", searchForm.parentNode);
}

// Function to remove the search form element from its current position
function removeSearchForm() {
	var searchFormParent = searchForm.parentNode;
	searchFormParent.parentNode.removeChild(searchFormParent);
}

// Function to move search form to its original position
function moveSearchFormToOriginalPosition() {
	var originalParentElement = document.querySelector(".search-section");
	originalParentElement.appendChild(searchForm.parentNode);
}

// Add event listener for resize event
window.addEventListener("resize", function () {
	if (window.matchMedia("(max-width:  838px)").matches) {
		// Insert the search form element after the logo element
		insertSearchForm();
	} else {
		// Remove the search form element from its current position
		removeSearchForm();
		// Move search form to its original position
		moveSearchFormToOriginalPosition();
	}
});

// Call the insertSearchForm() function on page load if screen size is less than or equal to 768px
if (window.matchMedia("(max-width: 768px)").matches) {
	insertSearchForm();
}

//
//
//
//
//

//
//
// Row-1 section
