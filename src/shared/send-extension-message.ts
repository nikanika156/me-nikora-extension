// import type { Message, Action } from './types'

import type { Actions, Message } from './types/types'

// export async function sendExtensionMessage<Tdata, Tresponse>(
// 	action: Action,
// 	data?: Tdata,
// 	tabId?: number,
// ): Promise<Tresponse> {
// 	const obj: Message<Tdata> = {
// 		action: action,
// 		data: data,
// 	}

// 	try {
// 		const request =
// 			typeof tabId !== 'undefined' && tabId !== null
// 				? await chrome.tabs.sendMessage(tabId, obj)
// 				: await chrome.runtime.sendMessage(obj)
// 		return request
// 	} catch (e) {
// 		console.log(e)
// 		throw e
// 	}

// 	// console.log(request)
// }

// // console.log(data)
export async function sendExtensionMessage<Tdata, Tresponse>(
	action: Actions,
	data?: Tdata,
	tabId?: number,
): Promise<Tresponse> {
	const obj: Message<Tdata> = {
		action: action,
		data: data,
	}

	try {
		const request =
			typeof tabId === 'number'
				? await chrome.tabs.sendMessage(tabId, obj)
				: await chrome.runtime.sendMessage(obj)

		return request
	} catch (e) {
		if (tabId && typeof tabId == 'number') {
			chrome.tabs.reload(tabId)

		} else {
			console.error('Error in sendExtensionMessage:', e)
		}
		throw e
	}
}
