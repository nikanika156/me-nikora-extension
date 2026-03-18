import { SELECTORS } from '../../selectors'
import { createIcons, Star } from 'lucide'
import { state } from '../../state'

export function customVacansyPage() {

	const shopId = document
		.querySelector<HTMLElement>(SELECTORS.VACANSY_SHOP_ID)
		?.innerText.split('#')[1]
	const buttonsContainer = document.querySelector(SELECTORS.BUTTONS_CONTAINER)
	if (buttonsContainer && shopId) {
		if (state.DEFAULT_IDS.includes(shopId)) return

		const isExist = () => state.config.includes(shopId)
		const favButton = document.createElement('button')
		const starIcon = document.createElement('i')
		starIcon.classList = 'fav-star'
		starIcon.setAttribute('data-lucide', 'star')

		starIcon.classList.toggle('fav-star-active', isExist())
		favButton.classList = 'fav-btn'
		//
		favButton.onclick = () => {
			const favStar = document.querySelector('.fav-star')?.classList
			if (shopId)
				if (state.config.includes(shopId)) {
					state.remove(shopId)
				} else {
					state.add(shopId)
				}
			favStar?.toggle('fav-star-active', isExist())
		}

		buttonsContainer.appendChild(favButton)
		favButton.appendChild(starIcon)
		createIcons({
			icons: { Star },
		})
	}

}
