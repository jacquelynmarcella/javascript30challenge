const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	let inBetween = false;

	// check if shift key down and box checked
	if (e.shiftKey && this.checked) {
		checkboxes.forEach(check => {
			if (check === this || check === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				check.checked = true;
			}
		});
	}

	lastChecked = this;

}

checkboxes.forEach(check => check.addEventListener('click', handleCheck));