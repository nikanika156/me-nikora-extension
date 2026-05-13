import { sendExtensionMessage } from '../shared/send-extension-message'
import type { Message } from '../shared/types/types'
import { checkAlarm } from './constants'
import { fetchReserve } from './api/fetch-reserve'
import { vacansysFilter } from './vacansys-filter'
import type { Reserve } from '../shared/types/api'
let vacansys: string | Reserve | null = null
export async function reactOnAlarms() {
	// let key: string = await sendExtensionMessage('GET_AUTH')
	chrome.alarms.onAlarm.addListener(async alarm => {
		if (checkAlarm.name == alarm.name) {
			try {
				// vacansys = await fetchReserve(key)
				// console.log(vacansys)
				// if (typeof vacansys === 'object' && vacansys) {
				// 	await vacansysFilter(vacansys)
				// }
			} catch (e) {
				throw e
			}
		}
		console.log(alarm.name)
	})
}
chrome.runtime.onMessage.addListener((message: Message<null>, _sender, sendResponse) => {
	if (message.action == 'GET_LOCATION') {
		const handleAsync = async () => {
			try {
				console.log('getting location');
				
				const key = await sendExtensionMessage<null, string>('GET_AUTH')
				// const reserve = await fetchReserve(key)
				console.log(key)

				// sendResponse(reserve)
			} catch (e) {
				console.error(e)
				sendResponse({ error: e instanceof Error ? e.message : String(e) })
			}
		}

		handleAsync()
		return true
	}
})
