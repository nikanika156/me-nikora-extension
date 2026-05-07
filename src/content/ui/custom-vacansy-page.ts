import { SELECTORS } from '../selectors'
import { createIcons, Star } from 'lucide'

import { sendExtensionMessage } from '../../shared/send-extension-message'
import type { ReserveItem } from '../../shared/types/api'
import { favorite } from '../../favorite'
// import { ffavorite } from '../../content'

export async function customVacansyPage() {
	const vacansyPage = document.querySelector(SELECTORS.VACANSY_PAGE)
	if (!vacansyPage) return
	const shopId = document
		.querySelector<HTMLElement>(SELECTORS.VACANSY_SHOP_ID)
		?.innerText.split('#')[1]
	const isExist = () => favorite.includes(shopId!)
	if (document.getElementById('favButton') || favorite.IMMUTABLE_IDS.includes(shopId!)) {
		const favStar = document.querySelector('.fav-star')?.classList
		favStar?.toggle('fav-star-active', isExist())
		return
	}
	const buttonsContainer = document.querySelector(SELECTORS.BUTTONS_CONTAINER)
	const vacansyMapLink = document.querySelector<HTMLAnchorElement>(SELECTORS.VACANSY_MAP_LINK)

	if (buttonsContainer && shopId && vacansyMapLink) {
		const vacansyObj = await sendExtensionMessage<string, ReserveItem>('GET_LOCATION', shopId)
		// console.log();
		
		// if (notNecassary) return
		const mLon = vacansyObj.shop.map.split(',')[1]
		const mLan = vacansyObj.shop.map.split(',')[0]
		console.log(mLon,mLan);
		
		const openStreetMap = `https://www.openstreetmap.org/?mlat=${mLan}&mlon=${mLon}&zoom=16`
		// const googleMap = `https://www.google.com/maps/search/?api=1&query=${mLon},${mLan}`
		// vacansyMapLink.href = googleMap
		vacansyMapLink.href = openStreetMap
		const favButton = document.createElement('button')
		const starIcon = document.createElement('i')
		favButton.id = 'favButton'
		favButton.classList.add('fav-btn')
		starIcon.classList = 'fav-star'
		starIcon.setAttribute('data-lucide', 'star')

		starIcon.classList.toggle('fav-star-active', isExist())
		//
		favButton.onclick = () => {
			const favStar = document.querySelector('.fav-star')?.classList

			console.log(favorite.toggle(shopId!).message)
			favStar?.toggle('fav-star-active', isExist())
			console.log(favorite)
		}

		buttonsContainer.appendChild(favButton)
		favButton.appendChild(starIcon)
		createIcons({
			icons: { Star },
		})
	}
}
