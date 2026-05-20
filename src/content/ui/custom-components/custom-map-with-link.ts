import { sendExtensionMessage } from '../../../shared/send-extension-message'
import type { ReserveItem } from '../../../shared/types/api'
import { VACANSY_SELECTORS } from '../../selectors'

export async function customMapWithLink(shopId: string) {
	const vacansyMap = document.querySelector<HTMLAnchorElement>(VACANSY_SELECTORS.MAP_LINK)
	if (!vacansyMap) return false
	try {
		const reserve = await sendExtensionMessage<string, ReserveItem>('GET_LOCATION', shopId)
		if (!reserve) return false
		console.log(reserve)

		const mLon = reserve.shop.map.split(',')[1]
		const mLan = reserve.shop.map.split(',')[0]
		console.log(mLon, mLan)

		const openStreetMap = `https://www.openstreetmap.org/?mlat=${mLan}&mlon=${mLon}&zoom=16`
		vacansyMap.href = openStreetMap
		// const googleMap = `https://www.google.com/maps/search/?api=1&query=${mLon},${mLan}`
		// vacansyMapLink.href = googleMap
	} catch (e) {
		console.error(e)
		return false
	}
}
