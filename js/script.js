const navButton = document.querySelector('.nav__phone_btn');
const navPhone = document.querySelector('.nav__phone');
const wrapper = document.querySelector('.wrapper');
const phoneOverlay = document.querySelector('.phone__overlay');
const navPortfolioButton = document.querySelector('.portfolio__nav-phone_button');
const navPortfolioList = document.querySelector('.portfolio__nav-list');

navButton.addEventListener('click', function(event) {
	navPhone.classList.add('active');
	phoneOverlay.classList.add('active');
	//wrapper.classList.add('wrapper_pointer');

});

wrapper.addEventListener('click', function(event) {
	console.log(event.target.closest('.nav__phone'));
	if (event.target.closest('.phone__content') == null) {
		navPhone.classList.remove('active');
		phoneOverlay.classList.remove('active');
		//wrapper.classList.remove('wrapper_pointer');
	}
});

navPortfolioButton.addEventListener('click', function(event) {
	navPortfolioList.classList.toggle('active');
});