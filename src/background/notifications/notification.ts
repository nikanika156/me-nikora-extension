import type { VacansyBasicNotification } from '../../shared/types/notifications'

class Notification {
	private async canBeAdded(notificationId: string) {
		const allNotifications = await chrome.notifications.getAll()
		return Object.keys(allNotifications).every(x => x !== notificationId)
	}
	async isActual(currentApiIds: string[], notificationId: string) {
		const allNotifications = await chrome.notifications.getAll()
		const visibleNotifications = Object.keys(allNotifications)
		for (const id of visibleNotifications) {
			return currentApiIds.every(x => x !== id)
		}
	}
	async update(notificationId: string, options: chrome.notifications.NotificationOptions) {
		if (await this.canBeAdded(notificationId))
			return await chrome.notifications.update(notificationId, options)
	}
	async remove(notificationId: string) {
		const isRemoved = await chrome.notifications.clear(notificationId)
		return isRemoved
	}
	async vacansyBasic(
		{ id, shopCode, schedule, position }: VacansyBasicNotification,
		title = 'ნიკორას ახალი ვაკანსია',
		priority = 2,
	) {
		try {
			const isNotExist = await this.canBeAdded(id)

			if (isNotExist) {
				const positionName = position
					? position
							.replace(/[\d():.-]/g, '')
							.replace(/\s*სთ\s*$/g, '')
							.trim()
					: 'პოზიცია უცნობია'
				const notificationOptions: chrome.notifications.NotificationCreateOptions = {
					title: title,
					type: 'basic',
					// items: [{}],
					message: `📍 ობიექტი: #${shopCode}, \n🕒 გრაფიკი: ${schedule}, \n 💼პოზიცია: ${positionName}`,
					iconUrl: chrome.runtime.getURL('icon.png'),
					// eventTime: Date.now(),
					priority: priority,
				}
				chrome.notifications.create(id, notificationOptions)
			} else {
				return 'Notification is alredy exist'
			}
		} catch (e) {
			console.log(e)
			throw e
		}
	}
	async vacansyList({}) {}
}
export const notification = new Notification()
