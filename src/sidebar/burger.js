import { getDomElement, doClassList } from '../utils.js'

export const toggleShowSidebar = (e) => {
	const { currentTarget } = e
	const $sidebar = getDomElement('.sidebar')
	const $sidebarCover = getDomElement('.sidebar__cover')

	if (doClassList(currentTarget, '_active', 'contains')) {
		hideSidebar(currentTarget, $sidebar)
	} else {
		showSidebar(currentTarget, $sidebar)
	}

	$sidebarCover.addEventListener('click', () => hideSidebar(currentTarget, $sidebar))
}

const hideSidebar = ($icon, $sidebar) => {
	doClassList($icon, '_active', 'remove')
	doClassList($sidebar, '_show-nav', 'remove')
}

const showSidebar = ($icon, $sidebar) => {
	doClassList($icon, '_active', 'add')
	doClassList($sidebar, '_show-nav', 'add')
}
