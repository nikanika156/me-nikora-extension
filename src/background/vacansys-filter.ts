import type { Reserve } from '../shared/types/api'
import { favorite } from '../favorite'
import { notification } from './notifications/notification'

export async function vacansysFilter(reserve: Reserve | null | string) {
	if (typeof reserve !== 'object' || reserve === null) {
		console.error('error in vacansysFilter.ts: ' + (reserve ? reserve : 'reserve is ' + null))
		return
	}
	const dailyReserves = Object.values(reserve.items)[0]
	if (Array.isArray(dailyReserves)) {
		for (const reserveItem of dailyReserves) {
			const reserveId = 'nikora-' + reserveItem.id

			if (favorite.includes(reserveItem.shop.code)) {
				const vacansyInfo = {
					id: reserveId,
					shopCode: reserveItem.shop.code,
					schedule: reserveItem.schedule,
					position: reserve.positions?.find(x => x.id === reserveItem.position_id)?.title || null,
				}
				try {
					notification.vacansyBasic(vacansyInfo)
				} catch (e) {
					throw e
				}
			}
		}
		const allNotifications = Object.keys(await chrome.notifications.getAll())
		console.log(allNotifications)
		for (const id of allNotifications) {
			if (!notification.isActual(dailyReserves, id)) {
				notification.remove(id)
			}
		}
	}
}
