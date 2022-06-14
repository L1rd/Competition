/*Слайдер*/

/* Індекс слайду за замовчуванням */
let slideIndex = 1;
showSlides(slideIndex);

/* Функція збільшує індекс на 1, показуючи наступний слайд*/
function plusSlide() {
	showSlides(slideIndex += 1);
}

/* Функція меншує індекс на 1, показуючи попередній слайд*/
function minusSlide() {
	showSlides(slideIndex -= 1);
}

/* Встановлює поточний слайд */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Основна функція слайдера */
function showSlides(n) {
	let i;
	let slides = document.querySelectorAll(".header__slider-item");
	let dots = document.querySelectorAll(".header__slider-dots-item");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
/*Слайдер*/

/*Поява блоків*/
