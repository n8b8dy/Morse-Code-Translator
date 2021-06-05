// Morse code translator
const CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const MORSE = ['-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];

function toMorse(text) {
	return text.toLowerCase().replace(/\s+/g, ' ').split(' ').map(word => word.split('').map(x => {
		if (!CHARS.includes(x)) {return}
		
		return MORSE[CHARS.indexOf(x)];
	}).join(' ')).join(' / ').trim();
}

function fromMorse(code) {
	return code.replace(/[^-.\s\|\\]\//g, '').replace(/\s+/, ' ').split('/').map(word => word.split(' ').map(x => {
		if (!MORSE.includes(x)) {return}
		
		return CHARS[MORSE.indexOf(x)];
	}).join('')).join(' ').toUpperCase();
}
