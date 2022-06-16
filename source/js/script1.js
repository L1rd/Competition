
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

/* Встановлює поточний слайд */
function currentSlides(x) {
	showSlide(slideNum = x);
}




/* Основна функція слайдера */
function showSlide(x) {
	let i;
	let slide = document.querySelectorAll(".block-one__item");
	let dots = document.querySelectorAll(".block-one__slides-dots-item");
	if (x > slide.length) {
		slideNum = 1
	}
	if (x < 1) {
		slideNum = slide.length
	}
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slide[slideNum - 1].style.display = "block";
	dots[slideNum - 1].className += " active";
}

function changeImage(id, way) {
	document.getElementById(id).src = way;
}
