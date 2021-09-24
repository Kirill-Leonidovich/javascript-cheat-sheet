import { getDomElement, doClassList } from './utils.js'
import { } from './navigation/getLinks.js'
import { $paragraphBody } from './paragraph/paragraph.js'


const $burgerIcon = getDomElement('.burger-icon')
const $sidebar = getDomElement('#sidebar')

$burgerIcon.addEventListener('click', () => {
  doClassList($burgerIcon, '_show-menu', 'toggle')
  doClassList($sidebar, '_show-menu', 'toggle')
})


$paragraphBody.addEventListener('DOMNodeInserted', () => {
  doClassList($burgerIcon, '_show-menu', 'remove')
  doClassList($sidebar, '_show-menu', 'remove')
});
