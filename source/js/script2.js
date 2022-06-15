/*Слайдер*/

/* Індекс слайду за замовчуванням */
let slideNum = 1;
showSlide(slideNum);
showSlide1(slideNum);
showSlide2(slideNum);

/* Функція збільшує індекс на 1, показуючи наступний слайд*/
function plusSlides() {
	showSlide(slideNum += 1);
}

/* Функція меншує індекс на 1, показуючи попередній слайд*/
function minusSlides() {
	showSlide(slideNum -= 1);
}

function plusSlide1() {
	showSlide1(slideNum += 1);
}

/* Функція меншує індекс на 1, показуючи попередній слайд*/
function minusSlide1() {
	showSlide1(slideNum -= 1);
}

function plusSlide2() {
	showSlide2(slideNum += 1);
}

/* Функція меншує індекс на 1, показуючи попередній слайд*/
function minusSlide2() {
	showSlide2(slideNum -= 1);
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
function showSlide1(x) {
	let i;
	let slide = document.querySelectorAll(".block-two__item");
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
function showSlide2(x) {
	let i;
	let slide = document.querySelectorAll(".block-three__item");
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
