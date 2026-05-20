import { favorite } from '../../../favorite'

export function customReserveList(mainList: HTMLElement) {
	if (!mainList) return
	for (const card of mainList?.children!) {
		const cardHeader = card.querySelector('ons-list-header')
		const shopId = cardHeader?.textContent.split('#')[1]
		const isCardfavorite = favorite.includes(shopId!)
		// console.log(shopId)
		cardHeader?.classList.toggle('favorite-header', isCardfavorite)
		card.classList.toggle('favorite-card', isCardfavorite)
		card.classList.toggle('regular-card', !isCardfavorite)
	}
}
