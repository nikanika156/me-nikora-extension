import { sendExtensionMessage } from '../shared/send-extension-message'
import type { Reserve } from '../shared/types/api'

export async function currentVacansys(): Promise<Reserve | string | null> {
	try {
		const tabs = await chrome.tabs.query({
			url: 'https://my.nikoratrade.ge/*',
			muted: false,
			discarded: false,
			frozen: false,
		})

		if (tabs.length === 0) {
			console.warn('Nikora tab not found')
			return null
		}
		const authKey: string = await sendExtensionMessage('GET_AUTH', null, tabs[0].id)
		const response = await fetch('https://my.nikoratrade.ge/api/reserve', {
			method: 'GET',
			headers: {
				accept: 'application/json',
				auth: authKey,
			},
		})
		const data = await response.json()


		if (data.msg && data.msg === 'მომხმარებელი არ მოიძებნა.') {
			return data.msg
		}

		return await data
	} catch (error) {
		console.log(error)
		throw error
	}
}
