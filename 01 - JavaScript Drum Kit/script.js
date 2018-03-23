function playSound(e) {
	var key;
	var audio;

	if(e.type === "keydown") {
		key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	} else if(e.type === "click") {
		key = this;
		audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
	}
	
	if(!audio) return; // stop function from running alltogether
	audio.currentTime = 0; // so that if we hit in succession it restarts
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; //skip if not a transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('click', playSound));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Set dynamic background colors
for(let i = 0; i <= keys.length - 1; i++) {
	const bgColor = "#" + i + "90047"
	keys[i].style.backgroundColor = bgColor;
}

window.addEventListener('keydown', playSound);

