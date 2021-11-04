export const getDomElement = (selector, all, parent = document) => {
	return typeof selector === 'string' ? (all ? parent.querySelectorAll(selector) : parent.querySelector(selector)) : selector
}

export const doClassList = (selector, classNames, type) => {
	const $el = getDomElement(selector)
	const arrNames = classNames.split(' ')

	for (const name of arrNames) {
		if (type === 'remove') {
			$el.classList.remove(name)
		} else if (type === 'toggle') {
			$el.classList.toggle(name)
		} else if (type === 'add') {
			$el.classList.add(name)
		} else if (type === 'contains') {
			return $el.classList.contains(name)
		} else {
			throw new Error(`element.classList.${type} is not a function`)
		}
	}
}
