import { setCurrentLanguage } from './src/sidebar/language.js'
import { fillNav } from './src/sidebar/nav.js'

window.addEventListener('load', () => {
	setCurrentLanguage()
	fillNav()
})


const $burgerIcon = document.querySelector('.burger-icon')

$burgerIcon.addEventListener('click', (event) => {
	event.currentTarget.classList.toggle('_active')
	document.querySelector('.sidebar').classList.toggle('_show-nav')
})