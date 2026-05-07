import { sendExtensionMessage } from '../../shared/send-extension-message'
import browser from 'webextension-polyfill'
class NikoraApi {

	async get() {
		const isStored = await browser.storage.local.get('authKey')
		if (isStored) return isStored

		const tabs = await chrome.tabs.query({
			url: 'https://my.nikoratrade.ge/*',
			pinned: true,
		})
		// const rightTab = tabs.find(tab =>   tab.pinned) || null
		// if (tabs.length > 0 && !rightTab) {
		// 	console.error('Tab needs to be pinned')
		// }
		if (tabs.length === 0) {
			console.warn('Nikora tab not found')
			// chrome.notifications.create()

			return null
		}
		return await sendExtensionMessage('GET_AUTH', null, tabs[0].id)
	}
    onChange(){
        
    }
}
