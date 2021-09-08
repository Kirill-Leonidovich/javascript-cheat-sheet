import { getDomElement, joinMessage } from '../utils.js'
import { fillSubList } from './subList.js'


export const renderLink = (selector, message, sub) => {
  const $el = getDomElement(selector)
  const id = joinMessage(message)

  const linkBody = `<li><a href="${id}" class="sidebar__link ${sub ? sub : ''}">${message}</a></li>`

  $el.insertAdjacentHTML('beforeend', linkBody)
}


export const renderSubList = (selector, message, arr) => {
  const $el = getDomElement(selector)
  const id = joinMessage(message)

  const arrowBody = `
    <li>
      <a href="${id}" class="sidebar__link">${message}</a>
      <div class="arrow">
        <span class="arrow__icon"></span>
        <ul class="sidebar__sublist" id="${id}">
        </ul>
      </div>
    </li>`

  $el.insertAdjacentHTML('beforeend', arrowBody)
  fillSubList(id, arr)
}