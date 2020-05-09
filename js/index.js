const body = document.querySelector('body');
const nav = document.querySelector('.nav-container');
const logo = document.querySelector('.logo-heading');
const home = document.querySelector('.home');
const adventure = document.querySelector('img[src="img/adventure.jpg"]');
const button = document.querySelectorAll('.btn');
const destination = document.querySelector('img[src="img/destination.jpg"]');
const destSection = document.querySelector('.content-destination');

//1
nav.addEventListener('mouseenter', () => {
	nav.style.fontFamily = 'Courier New';
});

//2
nav.addEventListener('mouseleave', () => {
	nav.style.backgroundColor = 'green';
	gsap.to(logo, { duration: 2, x: 250 });
});

//3
window.addEventListener('load', () => {
	alert('Welcome!!');
});

//4
window.addEventListener('scroll', (e) => {
	body.style.backgroundColor = `#${window.scrollY}`;
	home.style.backgroundColor = '#eee';
});

//5
adventure.addEventListener('mouseover', (e) => {
	e.stopPropagation();
	e.target.style.display = 'none';
});

//6
button[0].addEventListener('dblclick', (e) => {
	e.preventDefault();
	e.target.style.color = 'red';
});

//7
button[1].addEventListener('mousedown', (e) => {
	e.target.style.backgroundColor = 'orange';
});

//8
button[2].addEventListener('mouseup', (e) => {
	e.target.style.display = 'none';
	let check = document.createElement('input');
	check.type = 'checkbox';
	logo.appendChild(check);
	//9
	check.addEventListener('click', (e) => {
		alert('Default Prevented!');
		console.log('changed');
		e.preventDefault();
	});
});

//10
destination.addEventListener('dragend', (e) => {
	let myH2 = document.createElement('h2');
	myH2.textContent = 'What a drag!';
	myH2.style.color = 'orange';
	destSection.prepend(myH2);
});
