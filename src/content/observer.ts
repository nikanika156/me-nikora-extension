import { handlePageChange } from './handle-page-change'

export let observer: MutationObserver | null = null
export const observerPath = document.querySelector('ons-page > .page__content')!
export const observerOptions: MutationObserverInit = {
	childList: true,
	subtree: true,
}
export function handleObserver() {
	if (observer) observer.disconnect()
	observer = new MutationObserver(handlePageChange)
	observer.observe(observerPath, observerOptions)
}
