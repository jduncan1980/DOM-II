const blockGroup = document.querySelectorAll('.block');
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

function makeCounter(x) {
	let counter = x;
	return () => {
		return counter--;
	};
}

let decrement = makeCounter(-1);

blockGroup.forEach((block, index) => {
	console.log(blockGroup[index]);
	block.style.order = 1;
	block.style.transition = 'all 3s linear';
	block.style.marginLeft = '10px';

	block.addEventListener('click', (e) => {
		block.style.order = decrement();
	});

	block.addEventListener('mousedown', (e) => {
		block.style.marginLeft = '1500px';
	});

	window.addEventListener('mouseup', (e) => {
		blockGroup[index].style.marginLeft = '10px';
	});
});
