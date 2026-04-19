// import { state } from './state'

import { handleObserver } from './content/observer'
import { getAuthKey } from './content/api/get-auth-key'
import { favorite } from './favorite'
import { filterListById } from './content/ui/custom-list-page'
import { SELECTORS } from './content/selectors'
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	sender
	if (message.action == 'GET_AUTH') {
		sendResponse(getAuthKey())
		return true
	}
})
async function startApp() {
	// //@ts-ignore
	// window.testAdd = state.testAdd.bind(state)
	// //@ts-ignore
	// window.state = state
	// //@ts-ignore
	// window.updateList = customListPage
	// //
	await favorite.getList()
	handleObserver()
	chrome.storage.onChanged.addListener(
		(change: { config?: { oldValue: string[]; newValue: string[] } }, areaName: string) => {
			console.log(filterListById([...favorite.IMMUTABLE_IDS, ...change.config!.newValue]))
			console.log(change)
			// console.log('qfeq')

			// }
		},
	)
}
startApp()
