const swiper = new Swiper('.mySwiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
})

swiper.on('slideChange', function () {
	const activeSlideIndex = swiper.activeIndex
	const textConstruction = document.querySelector(
		'.our-objects__text-construction'
	)
	let slideText = ''

	switch (activeSlideIndex) {
		case 0:
			slideText = 'Строительство заходов КВЛ 220 кВ Нерюнгринская ГРЭС'
			break
		case 1:
			slideText =
				'Строительства двух одноцепных ВЛ 110 кВ Певек — Билибино, протяженностью 595 км'
			break
		case 2:
			slideText = 'Строительство ВЭС 100 МВт Абай-1'
			break
		case 3:
			slideText = 'ВЛ 500 кВ Нижнеангарская-Усть-Кут №2'
			break
		case 4:
			slideText = 'ВЛ 110 кВ Себзо-Харок'
			break
	}
	textConstruction.textContent = slideText
})

const overlay = document.querySelector('.overlay')
const burgerLogo = document.querySelector('.burger-logo')
const burgerMenu = document.querySelector('.burger-menu')
const burgerLink = document.querySelectorAll('.burger-menu__list-item-link')

const showOverlay = () => {
	overlay.style.display = 'block'
	setTimeout(() => {
		overlay.style.opacity = '1'
	}, 1)
}

const closeOverlay = () => {
	overlay.style.opacity = '0'
	setTimeout(() => {
		overlay.style.display = 'none'
	}, 1000)
}

burgerLogo.addEventListener('click', function () {
	burgerMenu.classList.toggle('active')
	burgerLogo.classList.toggle('active')
	overlay.classList.toggle('active')
	if (overlay.classList.contains('active')) {
		showOverlay()
	} else {
		closeOverlay()
	}
	if (burgerMenu.classList.contains('active')) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'visible'
	}
})

burgerLink.forEach(element => {
	element.addEventListener('click', function () {
		burgerMenu.classList.remove('active')
		burgerLogo.classList.remove('active')
		document.body.style.overflow = 'visible'
		closeOverlay()
	})
})
