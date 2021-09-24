import { getDomElement, doClassList } from '../utils.js'
import { renderLink, renderSubList } from './render.js'


export const $sidebarList = getDomElement('.sidebar__list')


export const fillSubList = (id, arr) => {
  const $currentEl = getDomElement(`#${id}`)

  arr.forEach(el => {
    if (typeof el === 'string') {
      renderLink($currentEl, el, 'sub')
    } else {
      createSubList(el, $currentEl)
    }
  })
}


export const createSubList = (obj, selector = $sidebarList) => {
  const objEntries = Object.entries(obj)

  for (const [key, arr] of objEntries) {
    renderSubList(selector, key, arr)
  }
  
  const $arrows = Array.from(getDomElement('.arrow', true))
  $arrows.forEach(arrow => arrow.addEventListener('click', showSubList))
}


const showSubList = (event) => { 
  if (doClassList(event.target, 'arrow__icon', 'contains')) {
    const $subList = getDomElement('.sidebar__sublist', false, event.currentTarget)
    const $arrowIcon = getDomElement('.arrow__icon', false, event.currentTarget)

    doClassList($subList, '_active', 'toggle')
    doClassList($arrowIcon, '_active', 'toggle')
  }

  event.stopPropagation()
}