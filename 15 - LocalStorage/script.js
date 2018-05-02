const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('tapasItems')) || [];

function addItem(e) {
	e.preventDefault();
	const text = (this.querySelector('[name=item]')).value;
	const item = {
		text,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	// can only use strings in local storage
	localStorage.setItem('tapasItems', JSON.stringify(items));
	this.reset();
}

// default empty object incase no value entered
function populateList(plates = [], platesList) {
	platesList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
				<label for="item${i}">${plate.text}</label>
			</li>
		`;
	}).join(''); // just need 1 big string, rather than array
}

function toggleDone(e) {
	if(!e.target.matches('input')) return; // skip this unless its an input;
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('tapasItems', JSON.stringify(items));
	populateList(items, itemsList);
}

populateList(items, itemsList);
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);