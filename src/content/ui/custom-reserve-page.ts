import { favorite } from '../../favorite'
import { RESERVE_SELECTORS } from '../selectors'
import '../content.css'
import './css/custom-list-page.css'
import { customReserveList } from './custom-components/custom-reserve-list'
import { customReserveStyle } from './custom-components/custom-reserve-style'
// let count = 0
export const customReservePage = () => {
	// const changedMainList = document.querySelector<HTMLElement>('.main-list')
	// const changedMainContainer = document.querySelector<HTMLElement>('.main-container')
	// const changedListPage = document.querySelector<HTMLElement>('.list-page')
	// if (changedListPage && changedMainContainer && changedMainList) return true
	const mainList = document.querySelector<HTMLElement>(RESERVE_SELECTORS.MAIN_LIST)
	const listPage = document.querySelector<HTMLElement>(RESERVE_SELECTORS.LIST_PAGE)
	const MainContainer = document.querySelector<HTMLElement>(RESERVE_SELECTORS.MAIN_CONTAINER)

	if (!mainList || !MainContainer || !listPage) return false
	console.log('223')
	customReserveStyle(MainContainer, mainList, listPage!)
	customReserveList(mainList)
	return true
}
