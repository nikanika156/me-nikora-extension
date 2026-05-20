export function customReserveStyle(
	mainContainer: HTMLElement,
	mainList: HTMLElement,
	listPage: HTMLElement,
) {
	if (
		mainContainer.id === 'main-container' &&
		mainList.id === 'main-list' &&
		listPage.id === 'list-page'
	) {
		return
	}
	mainContainer.id = 'main-container'
	mainList.id = 'main-list'
	listPage.id = 'list-page'
}
