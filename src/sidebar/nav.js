import { getDomElement, doClassList } from '../utils.js'

const hashContents = {}

export const fillNav = () => {
	const $sidebarList = getDomElement('.sidebar__list')
	const languageId = localStorage.getItem('language')

	hashContents[languageId]
		? overrideContent($sidebarList, hashContents[languageId])
		: getNavStruucture(languageId).then((navStructure) => {
				overrideContent($sidebarList)
				createNav(navStructure, $sidebarList)

				hashContents[languageId] ? null : (hashContents[languageId] = $sidebarList.innerHTML)
		  })

	$sidebarList.addEventListener('click', addHandlerSidebar)
}

const overrideContent = ($el, content = '') => {
	$el.innerHTML = content
}

const getNavStruucture = async (id) => {
	const response = await fetch(`./src/sidebar/languages/${id}.json`)
	const nav = await response.json()

	return nav
}

const createNav = (structure, $parent) => {
	structure.forEach((item) => chceckData(item, $parent))
}

const chceckData = (navItem, $parent) => {
	if (typeof navItem === 'string') {
		renderNavItem(createLink(navItem), $parent)
	} else {
		renderSubList(navItem, $parent)
	}
}

const createLink = (link) => {
	const idLink = getIdLink(link)
	const markupLink = `
		<li class="sidebar__item">
			<a class="sidebar__link" id="${idLink}" href="#${idLink}">
				${link}
			</a>
		</li>
		`

	return markupLink
}

const renderSubList = (subNav, $parent) => {
	const link = Object.keys(subNav)[0]
	const nav = Object.values(subNav).flat()
	const idSubNav = `${getIdLink(link)}Nav`
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
	const $currentList = getDomElement('.sidebar__list', false, $currentSubNav)

	renderNavItem(createLink(link), $currentSubNav, 'afterbegin')
	createNav(nav, $currentList)
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
