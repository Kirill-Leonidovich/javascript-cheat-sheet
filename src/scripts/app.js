import {} from './navigation/getLinks.js'


const burgerIcon = document.querySelector('.burger-icon')
const sidebar = document.querySelector('#sidebar')

burgerIcon.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('_show-menu')
  sidebar.classList.toggle('_show-menu')
})