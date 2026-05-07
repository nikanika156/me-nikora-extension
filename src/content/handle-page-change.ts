
import { filterListById } from './ui/custom-list-page'
import { customVacansyPage } from './ui/custom-vacansy-page'
import { withObserverPaused } from './utils/with-observer-paused'
// import { observer } from './observer'


export function handlePageChange(historyRecord: MutationRecord[], observer: MutationObserver) {
	// console.log('r');
	// console.log(historyRecord.map(x => (x.target as HTMLElement).className.includes('page__content')))
	if (!document.location.hash.includes('reserve')) return
	// let initial: MutationRecord[] = []
	const correctPage = historyRecord.reduce((previus, current) => {
		if (
			current.target instanceof HTMLElement &&
			current.target.classList.contains('page__content') &&
			current.addedNodes.item(0)?.nodeName !== '#comment'
		) {
			return [...previus, current]
		}
		return previus
	}, [] as MutationRecord[])
	console.log(correctPage)

	const isModalActive = document.querySelector('ons-modal[visible]')
	console.log(correctPage)
	if (isModalActive && correctPage.length === 0) return

	filterListById()
	withObserverPaused(observer!, customVacansyPage)
}
