import { getDomElement, createIdForNavigation } from '../utils.js'
import { fillSubList } from './subList.js'
import { renderParagraph } from '../paragraph/paragraph.js'


export const renderLink = (selector, message, sub) => {
  const $el = getDomElement(selector)
  const id = createIdForNavigation(message)

  const linkBody = `<li><a class="sidebar__link ${sub ? sub : ''}" id="${id}"" href="${id}">${message}</a></li>`

  $el.insertAdjacentHTML('beforeend', linkBody)

  const el = getDomElement(`#${id}`)
  el.addEventListener('click', renderParagraph)

  return el
}


export const renderSubList = (selector, message, arr) => {
  const listId = createIdForNavigation(message) + 'Sublist'
  const el = renderLink(selector, message, false)
  const listItem = el.closest('li')

  const arrowBody = `
    <div class="arrow">
      <span class="arrow__icon"></span>
      <ul class="sidebar__sublist" id="${listId}">
      </ul>
    </div>
    `

  listItem.insertAdjacentHTML('beforeend', arrowBody)
  fillSubList(listId, arr)
}