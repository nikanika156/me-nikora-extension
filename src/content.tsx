import { state } from './state'
import { handleObserver } from './content/observer'
import { customListPage } from './content/ui/custom-list-page'


async function startApp() {
	//@ts-ignore
	window.testAdd = state.testAdd.bind(state)
	//@ts-ignore
	window.state = state
	//@ts-ignore
	window.updateList = customListPage
	await state.getConfig()
	handleObserver()

}
startApp()
