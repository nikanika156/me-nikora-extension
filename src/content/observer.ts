import { handlePageChange } from './handle-page-change'

  export let observer: MutationObserver | null = null 
export function handleObserver() {
	if (observer) observer.disconnect()
	observer = new MutationObserver(handlePageChange)
	observer.observe(document.body, { childList: true, subtree: true })
}
