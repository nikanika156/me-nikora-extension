import { SELECTORS } from './selectors'
import {  filterListById } from './ui/custom-list-page'
import { customVacansyPage } from './ui/custom-vacansy-page'
import { withObserverPaused } from './utils/with-observer-paused'
import { observer } from './observer'
import { favorite } from '../favorite'

export function handlePageChange() {
	if (!document.location.hash.includes('reserve')) return
	const isModalActive = document.querySelector('ons-modal[visible]')
	// console.log(isModalActive)
	if (isModalActive) return
	const mainList = document.querySelector(SELECTORS.MAIN_LIST)
	const vacansyPage = document.querySelector(SELECTORS.VACANSY_PAGE)

	if (mainList) {
		filterListById([...favorite.IMMUTABLE_IDS, ...favorite.config])
	} else if (vacansyPage) {
		withObserverPaused(observer!, customVacansyPage)
	}
}
