
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

	popupOpen(popup2);

	return false;

}
/*PopUp*/

