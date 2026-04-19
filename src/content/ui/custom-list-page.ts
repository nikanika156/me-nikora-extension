import { favorite } from '../../favorite'
import { SELECTORS } from '../selectors'
import '../content.css'
// let count = 0
export const filterListById = (ids: string[]) => {
	const mainList = document.querySelector<HTMLElement>(SELECTORS.MAIN_LIST)
	if (!mainList) return
	console.log('ijij')
	mainList.style.display = 'flex'
	mainList.style.flexDirection = 'column'
	mainList.style.height = 'calc(100dvh - 335px)'
	for (const card of mainList?.children) {
		const cardHeader = card.querySelector('ons-list-header')
		const shopId = cardHeader?.textContent.split('#')[1]
		const isCardfavorite = ids.includes(shopId!)
		// console.log(shopId)
		cardHeader?.classList.toggle('favorite-header', isCardfavorite)
		card.classList.toggle('favorite-card', isCardfavorite)
		card.classList.toggle('regular-card', !isCardfavorite)
	}
}
