// import { state } from './state'

import { handleObserver } from './content/observer'
import { getAuthKey } from './content/api/get-auth-key'
import { favorite } from './favorite'
import { filterListById } from './content/ui/custom-list-page'

import { customVacansyPage } from './content/ui/custom-vacansy-page'

chrome.runtime.onMessage.addListener(async (message: any) => {
	if (message.action == 'GET_AUTH') {
		const token = getAuthKey()
		return token
	} else if (message.action == '123') {
		return 'dsvdvwc'
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
	favorite.onChange(() => {
		filterListById()
		customVacansyPage()
	})
}
startApp()
