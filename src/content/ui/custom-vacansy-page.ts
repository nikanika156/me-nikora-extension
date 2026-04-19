import { SELECTORS } from '../selectors'
import { createIcons, Star } from 'lucide'
import { favorite } from '../../favorite'
import { sendExtensionMessage } from '../../shared/send-extension-message'

export function customVacansyPage() {
	if (document.getElementById('favButton')) return
	const shopId = document
		.querySelector<HTMLElement>(SELECTORS.VACANSY_SHOP_ID)
		?.innerText.split('#')[1]
	const buttonsContainer = document.querySelector(SELECTORS.BUTTONS_CONTAINER)
	const vacansyMapLink = document.querySelector<HTMLAnchorElement>(SELECTORS.VACANSY_MAP_LINK)
	// const googleMap = 'https://www.google.com/maps/search/?api=1&query='
	// const ltdLng =

	if (buttonsContainer && shopId && vacansyMapLink) {
		if (favorite.IMMUTABLE_IDS.includes(shopId)) return
		vacansyMapLink.href = 'https://www.google.com/maps/search/?api=1&query='
		const isExist = () => favorite.includes(shopId)
		const favButton = document.createElement('button')
		favButton.id = 'favButton'
		const starIcon = document.createElement('i')
		starIcon.classList = 'fav-star'
		starIcon.setAttribute('data-lucide', 'star')

		starIcon.classList.toggle('fav-star-active', isExist())
		favButton.classList = 'fav-btn'
		//
		favButton.onclick = () => {
			sendExtensionMessage<string, null>('TOGGLE_ID', shopId)
			const favStar = document.querySelector('.fav-star')?.classList
			favStar?.toggle('fav-star-active', isExist())
			// sendExtensionMessage('GET_API')
			// if (shopId)
			// 	if (state.config.includes(shopId)) {
			// 		state.remove(shopId)
			// 	} else {
			// 		state.add(shopId)
			// 	}
		}

		buttonsContainer.appendChild(favButton)
		favButton.appendChild(starIcon)
		createIcons({
			icons: { Star },
		})
	}
}
