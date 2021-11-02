import { getDomElement, doClassList } from '../utils.js'

const $sidebarList = getDomElement('.sidebar__list')
const hashContent = {}

export const fillNav = () => {
	const languageId = localStorage.getItem('language')

	hashContent[languageId]
		? overrideContent($sidebarList, hashContent[languageId])
		: getNav(languageId).then((nav) => {
				overrideContent($sidebarList)
				createNav(nav, $sidebarList)

				hashContent[languageId] ? null : (hashContent[languageId] = $sidebarList.innerHTML)
		  })

	$sidebarList.addEventListener('click', addHandlerSidebar)
}

const overrideContent = ($el, content = '') => {
	$el.innerHTML = content
}

const getNav = async (id) => {
	const response = await fetch(`./src/sidebar/languages/${id}.json`)
	const nav = await response.json()

	return nav
}

const createNav = (nav, $parent) => {
	nav.forEach((item) => chceckData(item, $parent))
}

const chceckData = (navItem, $parent) => {
	if (typeof navItem === 'string') {
		renderNavItem(createLink(navItem), $parent)
	} else {
		createSubList(navItem, $parent)
	}
}

const createLink = (link) => {
	const idLink = getIdLink(link)
	const markupLink = `
		<li class="sidebar__item" id="${idLink}">
			<a href="#${idLink}" class="sidebar__link">
				${link}
			</a>
		</li>
		`

	return markupLink
}

const createSubList = (subNav, $parent) => {
	const link = Object.keys(subNav)[0]
	const nav = Object.values(subNav)
	const idMainLink = getIdLink(link)
	const idSubNav = `${idMainLink}Nav`
	const markupSubNav = `
		<nav class="sidebar__subnav" id="${idSubNav}">
			<div class="sidebar__arrow arrow">
				<span class="arrow__icon"></span>
			</div>
			<ul class="sidebar__list">
			</ul>
		</nav>
		`

	renderNavItem(markupSubNav, $parent)

	const $currentSubNav = getDomElement(`#${idSubNav}`)
	const $currentSubList = getDomElement('.sidebar__list', false, $currentSubNav)

	renderNavItem(createLink(link), $currentSubNav, 'afterbegin')
	createNav(...nav, $currentSubList)
}

const getIdLink = (text) => {
	return text
		.toLowerCase()
		.split(' ')
		.map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
		.join('')
}

const renderNavItem = (markupNavItem, $parent, position = 'beforeend') => {
	$parent.insertAdjacentHTML(position, markupNavItem)
}

const addHandlerSidebar = (e) => {
	const { target } = e

	if (doClassList(target, 'arrow', 'contains')) {
		toggleShowSubList(target)
	} else {
		return
	}
}

const toggleShowSubList = ($arrow) => {
	const $subNav = $arrow.closest('.sidebar__subnav')

	doClassList($arrow, '_active', 'toggle')
	doClassList($subNav, '_show-sublist', 'toggle')
}
