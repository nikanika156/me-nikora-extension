import { state } from '../../state'
import { SELECTORS } from '../../selectors'
import '../content.css'

export const customListPage = () => {
	const mainList = document.querySelector<HTMLElement>(SELECTORS.MAIN_LIST)

	if (mainList) {
		mainList.style.display = 'flex'
		mainList.style.flexDirection = 'column'
		for (const card of mainList?.children) {
			const cardHeader = card.querySelector('ons-list-header')
			const shopId = cardHeader?.textContent.split('#')[1]

			if (state.config.includes(shopId!)) {
				console.log(shopId)
				cardHeader?.classList.add('favorite-header')
				card.classList.add('favorite')
			}
		}
	}
}
