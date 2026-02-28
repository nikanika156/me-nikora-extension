import { state } from '../state'
import { SELECTORS } from '../selectors'
import { customListPage } from './ui/custom-list-page'
import { customVacansyPage } from './ui/custom-vacansy-page'

export function tasker() {
	const mainList = document.querySelector<HTMLElement>(SELECTORS.MAIN_LIST)
	const vacansyPage = document.querySelector(SELECTORS.VACANSY_PAGE)

	if (mainList) {
		// state.add('071')
		console.log(state.config)

		customListPage()
	} else if (vacansyPage) {
		customVacansyPage()
	}
}
