import { customReservePage } from './ui/custom-reserve-page'
import { customVacansyPage } from './ui/custom-vacansy-page'
import { withObserverPaused } from './utils/with-observer-paused'
// import { observer } from './observer'

export function handlePageChange(historyRecord: MutationRecord[], observer: MutationObserver) {
	if (!document.location.hash.includes('reserve')) return

	const correctPage = historyRecord.reduce((previus, current) => {
		if (
			current.target instanceof HTMLElement &&
			current.target.classList.contains('page__content')
		) {
			return [...previus, current]
		}
		return previus
	}, [] as MutationRecord[])

	const isModalActive = document.querySelector('ons-modal[visible]')

	console.log(correctPage)

	if (isModalActive) return

	// console.log(correctPage)

	// customReservePage()
	if (customReservePage()) return
	withObserverPaused(observer!, customVacansyPage)
}
