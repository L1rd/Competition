/*Слайдер*/

/* Індекс слайду за замовчуванням */
let slideNum = 1;
showSlide(slideNum);

/* Функція збільшує індекс на 1, показуючи наступний слайд*/
function plusSlides() {
	showSlide(slideNum += 1);
}

/* Функція меншує індекс на 1, показуючи попередній слайд*/
function minusSlides() {
	showSlide(slideNum -= 1);
}



/* Основна функція слайдера */
function showSlide(x) {
	let i;
	let slide = document.querySelectorAll(".block-one__item");
	if (x > slide.length) {
		slideNum = 1
	}
	if (x < 1) {
		slideNum = slide.length
	}
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	slide[slideNum - 1].style.display = "block";

}