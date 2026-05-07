export async function setOffscreen(path: string) {
	if (await chrome.offscreen.hasDocument()) {
		return
	}
	await chrome.offscreen.createDocument({
		url: path,
		reasons: [chrome.offscreen.Reason.DOM_SCRAPING], // ოფიციალური მიზეზი ბრაუზერისთვის
		justification: 'Keep Service Worker awake for background tasks',
	})
}
