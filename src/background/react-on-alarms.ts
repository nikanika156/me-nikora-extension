import { sendExtensionMessage } from '../shared/send-extension-message'
import type { Message } from '../shared/types/types'
import { checkAlarm } from './constants'
import { fetchReserve } from './fetch-reserve'
import { vacansysFilter } from './vacansys-filter'

export async function reactOnAlarms() {
	let key: string = await sendExtensionMessage('GET_AUTH')
	chrome.alarms.onAlarm.addListener(async alarm => {
		if (checkAlarm.name == alarm.name) {
			try {
				const vacansys = await fetchReserve(key)
				console.log(vacansys)
				if (typeof vacansys === 'object' && vacansys) {
					await vacansysFilter(vacansys)
				}
			} catch (e) {
				throw e
			}
		}
		console.log(alarm.name)
	})
}
chrome.runtime.onMessage.addListener(async (message: Message<string>, sender, sendResponse) => {
	// if ((message.action == 'GET_LOCATION', sender)) {
	// 	if (Array.isArray(full)) {
	// 		sendResponse(full.find(x => x.shop.code == message.data))
	// 	} else {
	// 		// sendResponse(Object.values(await currentVacansys.items)[0])
	// 	}
	// }
})
