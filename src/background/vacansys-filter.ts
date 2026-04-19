import type { Reserve } from '../shared/types/api'
import { favorite } from '../favorite'
import { notification } from './notifications/notification'
import { type VacansyBasicNotification } from '../shared/types/notifications'
export async function vacansysFilter(reserve: Reserve | null | string) {
	let newNotifucations: VacansyBasicNotification[] = []

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
					console.log(vacansyInfo.id)
					notification.vacansyBasic(vacansyInfo)
				} catch (e) {
					throw e
				}
			}
		}
		const allNotifications = Object.keys(await chrome.notifications.getAll())
		for (const id of allNotifications) {
			// const reserveId = 'nikora-' + x.id
			const canBeRemoved = !dailyReserves.some(
				x => id === 'nikora-' + x.id && favorite.includes(x.shop.code),
			)
			// console.log(canBeRemoved)

			if (canBeRemoved) {
				notification.remove(id)
			}
			// console.log(fff)
		}
		// const ggg = fff.find(x => x[0] === reserveId)
	} else {
		const local = await chrome.storage.local.set({ now: dailyReserves })
		console.log(await chrome.storage.local.get('now'),'ll')
	}
}
