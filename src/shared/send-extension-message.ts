// import type { Message, Action } from './types'

import { getTabId } from './get-tabid'
import type { Actions, Message } from './types/types'

export async function sendExtensionMessage<Tdata, Tresponse>(
	action: Actions,
	data?: Tdata,
	toContentScript: boolean = false,
): Promise<Tresponse | null> {
	const obj: Message<Tdata> = {
		action: action,
		data: data,
	}
	const tabId = await getTabId()
	if (!tabId) return null
	try {
		const request = toContentScript
			? await chrome.tabs.sendMessage(tabId, obj)
			: await chrome.runtime.sendMessage(obj)

		return request
	} catch (e) {
		if (toContentScript) {
			chrome.tabs.reload(tabId)
		} else {
			console.error('Error in sendExtensionMessage:', e)
		}
		throw e
	}
}
