import { getDomElement, doClassList } from '../utils.js'
import { renderLink, renderSubList } from './render.js'


export const $sidebarList = document.querySelector('.sidebar__list')


export const createSubList = (obj, selector = $sidebarList) => {
  const objEntries = Object.entries(obj)

  for (const [key, arr] of objEntries) {
    renderSubList(selector, key, arr)
  }

  const $arrows = Array.from(document.querySelectorAll('.arrow'))
  $arrows.forEach(arrow => arrow.addEventListener('click', showSubList))
}


export const fillSubList = (id, arr) => {
  const $currentEl = document.getElementById(id)

  arr.forEach(el => {
    if (typeof el === 'string') {
      renderLink($currentEl, el, 'sub')
    } else {
      createSubList(el, $currentEl)
    }
  })
}


const showSubList = (event) => { 
  if (doClassList(event.target, 'arrow__icon', 'contains')) {
    const $subList = getDomElement('.sidebar__sublist', event.currentTarget)
    const $arrowIcon = getDomElement('.arrow__icon', event.currentTarget)

    doClassList($subList, '_active', 'toggle')
    doClassList($arrowIcon, '_active', 'toggle')
  }

  event.stopPropagation()
}