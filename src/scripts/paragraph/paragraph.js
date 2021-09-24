import { getDomElement } from "../utils.js";
import * as pages from './pages.js'


export const $paragraphBody = getDomElement('.paragraph__body')

export const renderParagraph = (event) => {
  const paragraphId = typeof event === 'string' ? getPage(event) : getPage(event.target.id)

  $paragraphBody.innerHTML = null
  $paragraphBody.insertAdjacentHTML('beforeend', paragraphId)

  const subNav = Array.from(getDomElement('UL', true, $paragraphBody)).filter(list => list.dataset.nav === 'subNavigations') ///////////////////////

  if (subNav.length) {
    subNav.forEach(nav => {
      const subLinks = getDomElement('A', true, nav)

      subLinks.forEach(link => {
        link.addEventListener('click', renderParagraph)
      })
    })
  }

  event?.preventDefault()
}

const getPage = (paragraphId) => {
  let currentParagraph

  if (paragraphId === 'типыДанных') {
    currentParagraph = pages.dataType
  } else if (paragraphId === 'string') {
    currentParagraph = pages.string
  } else {
    currentParagraph = pages.defaultPage
  }

  // console.log(window.history);

  // window.history.pushState(paragraphId, '', '')
  return currentParagraph
}
// window.addEventListener('popstate', (event) => {
//   renderParagraph(window.history.state)
//   window.history.length -= 1
//   // window.history.state.length -= 1
// })