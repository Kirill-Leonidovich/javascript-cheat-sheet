import { setCurrentLanguage } from './src/language.js'

const burgerIcon = document.querySelector('.burger-icon')

burgerIcon.addEventListener('click', (event) => {
	event.currentTarget.classList.toggle('_active')
	document.querySelector('.sidebar').classList.toggle('_show-nav')
})

window.addEventListener('load', setCurrentLanguage)

document.querySelectorAll('.arrow').forEach((arr) => {
	arr.addEventListener('click', (e) => {
		e.target.classList.toggle('_active')
		e.target.closest('.sidebar__subnav').classList.toggle('_show-sublist')
	})
})
