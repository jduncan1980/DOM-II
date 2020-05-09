const blockGroup = document.querySelectorAll('.block');
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');
const body = document.querySelector('body');

function makeCounter(x) {
	let counter = x;
	return () => {
		return counter--;
	};
}

let decrement = makeCounter(-1);

blockGroup.forEach((block) => {
	block.style.order = 1;
	block.style.transition = 'all 5s linear';
	// block.style.position = 'relative';
	block.addEventListener('click', reorderBlocks);
	block.addEventListener('mousedown', takeOff);
	body.addEventListener('mouseup', landing);
});

function reorderBlocks(e) {
	e.target.style.order = decrement();
}
let id;
function takeOff(e) {
	e.target.style.marginLeft = '1000px';
}

function landing(e) {
	e.target.style.marginLeft = 0;
}
