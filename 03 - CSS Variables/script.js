const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
	console.log(this.value);
	const suffix = this.dataset;
	console.log(this.dataset);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));