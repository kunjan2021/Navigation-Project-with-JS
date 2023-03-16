const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
	// Toggle MenuBars open/closed
	menuBars.classList.toggle('change');
}

// Event Listeners
menuBars.addEventListeners('click',toggleNav);
nav1.addEventListeners('click',toggleNav);
nav2.addEventListeners('click',toggleNav);
nav3.addEventListeners('click',toggleNav);
nav4.addEventListeners('click',toggleNav);


