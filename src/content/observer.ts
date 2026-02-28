import { SELECTORS } from '../selectors'
import { tasker } from './tasker'

let observeBody: MutationObserver | null = null
let observeContainer: MutationObserver | null = null
function launchContainerObserver() {
	const listPage = document.querySelector(SELECTORS.LIST_PAGE)
	const mainList = document.querySelector(SELECTORS.MAIN_LIST)
	if (listPage && mainList) {
		tasker()
		observeContainer?.observe(listPage, { childList: true })
		observeBody?.disconnect()
	}

  
}


export function observer() {
	//
	


  
	if (observeBody) observeBody.disconnect()
	if (observeContainer) observeContainer.disconnect()
	//
	//
	observeBody = new MutationObserver(launchContainerObserver)
	observeContainer = new MutationObserver(tasker)

	observeBody.observe(document.body, { childList: true, subtree: true })
}
