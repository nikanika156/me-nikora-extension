// For functions that changes DOM
export function withObserverPaused(mutationObserver: MutationObserver, callback: () => void) {
	mutationObserver.disconnect()
	try {
		callback()
	} catch {
		console.log('callback error')
	} finally {
		mutationObserver.observe(document.body, { childList: true, subtree: true })
	}
}
