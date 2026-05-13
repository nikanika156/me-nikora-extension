import { VACANSY_SELECTORS } from '../selectors'
import { createIcons, Star } from 'lucide'

import { sendExtensionMessage } from '../../shared/send-extension-message'
import type { ReserveItem } from '../../shared/types/api'
import { favorite } from '../../favorite'
import { customMapWithLink } from './custom-components/custom-map-with-link'

export async function customVacansyPage() {
	if (document.getElementById('favButton')) return true
	if (!document.querySelector(VACANSY_SELECTORS.PAGE)) return false
	const shopId = document
		.querySelector<HTMLElement>(VACANSY_SELECTORS.SHOP_ID)
		?.innerText.split('#')[1]

	if (favorite.IMMUTABLE_IDS.includes(shopId!)) {
		const favStar = document.querySelector('.fav-star')?.classList
		favStar?.toggle('fav-star-active', favorite.includes(shopId!))
		return
	}
	const buttonsContainer = document.querySelector(VACANSY_SELECTORS.BUTTONS_CONTAINER)
	const vacansyMapLink = document.querySelector<HTMLAnchorElement>(VACANSY_SELECTORS.MAP_LINK)

	if (buttonsContainer && shopId) {
		const isExist = favorite.includes(shopId!)
		customMapWithLink(shopId)
		const favButton = document.createElement('button')
		const starIcon = document.createElement('i')
		favButton.id = 'favButton'
		favButton.classList.add('fav-btn')
		starIcon.classList = 'fav-star'
		starIcon.setAttribute('data-lucide', 'star')

		starIcon.classList.toggle('fav-star-active', isExist)
		//
		favButton.onclick = () => {
			const favStar = document.querySelector('.fav-star')?.classList

			console.log(favorite.toggle(shopId!).message)
			favStar?.toggle('fav-star-active', isExist)
			console.log(favorite)
		}

		buttonsContainer.appendChild(favButton)
		favButton.appendChild(starIcon)
		createIcons({
			icons: { Star },
		})
	}
}
