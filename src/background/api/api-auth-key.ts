import { sendExtensionMessage } from '../../shared/send-extension-message'
import browser from 'webextension-polyfill'
class NikoraApi {
	// constructor() {
	// 	chrome.storage.onChanged.addListener(changes => {
	// 		if (changes.authKey) {
	// 			const newKey = changes.authKey.newValue
	// 		}
	// 	})
	// }
	// private callbacks: ((key: string) => void)[] = []
	key: string | null = null
	async get() {
		const isStored = await browser.storage.local.get('authKey')
		console.log(isStored);
		
		if (isStored) {
			this.key = isStored.authKey as string
			return this.key
		}

		return (this.key = await sendExtensionMessage('GET_AUTH', null, true))
	}
	// onChange(callback: (key: string) => void) {}
}
export const nikoraApi = new NikoraApi()
