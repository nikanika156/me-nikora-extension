import { state } from '../../state'
import { SELECTORS } from '../../selectors'
import '../content.css'

export const customListPage = () => {
	const mainList = document.querySelector<HTMLElement>(SELECTORS.MAIN_LIST)
	if (mainList) {
		mainList.style.display = 'flex'
		mainList.style.flexDirection = 'column'
		mainList.style.height = 'calc(100dvh - 300px)'
		for (const card of mainList?.children) {
			const cardHeader = card.querySelector('ons-list-header')
			const shopId = cardHeader?.textContent.split('#')[1]
			const isCardfavorite = state.config.includes(shopId!) || state.DEFAULT_IDS.includes(shopId!)
			// console.log(shopId)
			cardHeader?.classList.toggle('favorite-header', isCardfavorite)
			card.classList.toggle('favorite-card', isCardfavorite)
			card.classList.toggle('regular-card', !isCardfavorite)
		}
	}
}
