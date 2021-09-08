import { renderLink } from './render.js'
import { createSubList, $sidebarList } from './subList.js'


(async function () {
  const request = await fetch('./src/scripts/navigation/list-en.json')
  const response = await request.json()

  return response
})()
  .then(navigation => navigation.forEach(chceckData))

 
const chceckData = (navItem) => {
  if (typeof navItem === 'string') {
    renderLink($sidebarList, navItem)
  } else {
    createSubList(navItem)
  }
}