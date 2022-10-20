let cookiesAccepted = false;
const cookiesElement = document.querySelector('.second_page__footer');
const cookiesButton = document.querySelector('.second_page__footer > button');

cookiesButton.addEventListener('click', () => {
	if (!cookiesAccepted) {
		cookiesAccepted = true;
		cookiesElement.style.visibility = 'hidden';
	}
});

const inputElement = document.querySelector('.navbar_nav > input');
const bodyElement = document.querySelector('body');
const visibilityItems = document.querySelectorAll(
	'.first_page__header, .first_page__cta, .second_page__header, .second_page__main'
);

let menuVisible = !inputElement.checked;
inputElement.addEventListener('click', () => {
	menuVisible = !menuVisible;
	for (const item of visibilityItems) {
		item.style.visibility = menuVisible ? 'visible' : 'hidden';
		bodyElement.style.overflow = menuVisible ? 'auto' : 'hidden';
	}
});
