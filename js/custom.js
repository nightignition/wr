/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Header
3. Init Language
4. Init Menu
5. Init Testimonials Slider


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initHeader();
	initLanguage();
	initMenu();
	initSlider();

	$(window).on('resize', function()
	{
		initHeader();
	});

	$(document).on('scroll', function()
	{
		initHeader();
	});

	/* 

	2. Init Header

	*/

	function initHeader()
	{
		const header = document.getElementById("header");
		if($(window).scrollTop() > 99)
		{
			header.classList.add('hidden');
		}
		else
		{
			header.classList.remove('hidden');
		}
		if($(window).scrollTop() > 180)
		{
			header.classList.add('scrolled');
		}
		else
		{
			header.classList.remove('scrolled');
		}
	}

	/* 

	3. Init Language

	*/

	function initLanguage()
	{
		const selector = document.getElementById("langPicker");
		const dropdown = selector.querySelector(".dropdown");
		const selectedFlag = selector.querySelector(".selected-flag img");
		const selectorMenu = document.getElementById("langPickerMenu");
		const dropdownMenu = selectorMenu.querySelector(".dropdown-menu");
		const selectedFlagMenu = selectorMenu.querySelector(".selected-flag img");

		selector.addEventListener("click", function (e)
		{
			dropdown.classList.toggle("show");
		});
		selectorMenu.addEventListener("click", function (e)
		{
			dropdownMenu.classList.toggle("show");
		});

		dropdown.addEventListener("click", function (e)
		{
			if (e.target.tagName === "IMG")
			{
				selectedFlag.src = e.target.src;
				selectedFlag.alt = e.target.alt;
				selectedFlag.dataset.country = e.target.dataset.country;
				dropdown.classList.remove("show");
			}
		});

		dropdownMenu.addEventListener("click", function (e)
		{
			if (e.target.tagName === "IMG")
			{
				selectedFlagMenu.src = e.target.src;
				selectedFlagMenu.alt = e.target.alt;
				selectedFlagMenu.dataset.country = e.target.dataset.country;
				dropdownMenu.classList.remove("show");
			}
		});

		document.addEventListener("click", function (e)
		{
			if (!selector.contains(e.target))
			{
				dropdown.classList.remove("show");
			}
		});

	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		const btn = document.getElementById('hamburger-button');
		const menu = document.getElementById('menu');
		const close = document.getElementById('hamburger-close');

		btn.addEventListener("click", function(e)
		{
			menu.classList.toggle("active");
		});

		close.addEventListener("click", function(e)
		{
			menu.classList.toggle("active");
		});
	}

	/* 

	5. Init Testimonials Slider

	*/

	function initSlider()
	{
		const slider = document.getElementById("slider");
		$(slider).owlCarousel(
		{
			items: 3,
			margin: 24,
			responsive:
			{
				0: 
				{
					items: 1
				},
				768:
				{
					items: 2
				},
				992:
				{
					items: 3
				}
			}
		});
	}

});