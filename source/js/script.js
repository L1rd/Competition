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

/*PopUp*/
const popupLinks = document.querySelectorAll(".popup-link")
const body = document.querySelector("body")
const popupCloseIcon = document.querySelectorAll(".close-popup")
const form = document.querySelector('popup-form__form')
const timeOut = 800;

let unlock = true;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		})
	}

}
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {
		const el = popupCloseIcon[i];
		el.addEventListener("click", function (e) {
			popupClose(el.closest(".popup-form"))
			e.preventDefault();

		})
	}
}


function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector(".popup-form.open");
		if (popupActive) {
			popupClose(popupActive, false)
		}
		else {
			bodyLock();
		}
		debugger
		curentPopup.classList.add("open");
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest(".popup-form__content")) {
				popupClose(e.target.closest(".popup-form"));
			}
		})
	}

}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove("open")

		if (doUnlock) {
			bodyUnLock();
		}
	}
	debugger
}

function bodyLock() {
	const lockPaddingValue = (window.innerWidth - document.querySelector('.wrapper').offsetWidth) + 'px';
	console.log(body);
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');
	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeOut);
}

function bodyUnLock() {
	setTimeout(function () {
		body.style.paddingRight = '0px';
		body.classList.remove('lock')
	}, timeOut)
}

function submitForm() {
	const frm = document.querySelector('.popup-form__form');
	frm.reset();
	debugger;
	popupOpen(popup2);
	
	return false;

}
/*PopUp*/
