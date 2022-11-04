const form = document.querySelector('.contact__form');

if (form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const inputEmail = document.querySelector(
			'.contact__form [name="email"]'
		).value;
		const inputName = document.querySelector(
			'.contact__form [name="name"]'
		).value;
		const inputMessage = document.querySelector(
			'.contact__form [name="message"]'
		).value;

		const subject = 'Hello, I would like to talk with you';
		const message = `Hey, my name  is ${inputName}. ${inputMessage}`;

		if (!inputEmail || !inputName) {
			console.error('No email or name specified');
			return;
		}

		document.location.href = `mailto:me@viktormelin.com?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(message)}`;

		form.reset();
	});
}

const inputElement = document.querySelector('.navbar__nav > button');
const menuElement = document.querySelector('.navbar__nav > ul');
const bodyElement = document.querySelector('body');
let menuVisible = true;

inputElement.addEventListener('click', () => {
	menuVisible = JSON.parse(inputElement.getAttribute('aria-expanded'));

	inputElement.setAttribute('aria-expanded', !menuVisible);

	if (menuVisible) menuElement.querySelector('a').focus();

	bodyElement.style.overflow = menuVisible ? 'auto' : 'hidden';
});
