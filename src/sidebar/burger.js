import { getDomElement, doClassList } from '../utils.js'

export const $burgerIcon = getDomElement('.burger-icon')

const $sidebar = getDomElement('.sidebar')
const $sidebarCover = getDomElement('.sidebar__cover')

export const toggleShowSidebar = () => {
	if (doClassList($burgerIcon, '_active', 'contains')) {
		hideSidebar(true)
	} else {
		showSidebar(false)
	}
}

export const hideSidebar = () => {
	doSidebar(false)
}

const showSidebar = () => {
	doSidebar(true)
}

const doSidebar = (flag) => {
	if (flag) {
		doClassList($burgerIcon, '_active', 'add')
		doClassList($sidebar, '_show-nav', 'add')
	} else {
		doClassList($burgerIcon, '_active', 'remove')
		doClassList($sidebar, '_show-nav', 'remove')
	}
}

$sidebarCover.addEventListener('click', hideSidebar)
