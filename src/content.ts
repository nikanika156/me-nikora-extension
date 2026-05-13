// import { state } from './state'

import { handleObserver } from './content/observer'
import { getAuthKey } from './content/api/get-auth-key'
import { favorite } from './favorite'

import { customVacansyPage } from './content/ui/custom-vacansy-page'
import type { Message } from './shared/types/types'
import { RESERVE_SELECTORS } from './content/selectors'
import { customReserveList } from './content/ui/custom-components/custom-reserve-list'

chrome.runtime.onMessage.addListener(async (message: Message<null>) => {
	if (message.action == 'GET_AUTH') {
		const token = getAuthKey()
		return token
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
	favorite.onChange(() => {
		const mainList = document.querySelector<HTMLElement>(RESERVE_SELECTORS.MAIN_LIST)
		customReserveList(mainList!)
		customVacansyPage()
	})
	handleObserver()
}
startApp()
