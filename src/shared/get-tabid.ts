export async function getTabId(): Promise<number | null> {
	const tabs = await chrome.tabs.query({ url: 'https://my.nikoratrade.ge/*', pinned: true })
	return tabs[0]?.id ?? null
}
