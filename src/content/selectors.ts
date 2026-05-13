export const SHARED_SELECTORS = {
	CARD: 'ons-list-item',
	HEADER: 'ons-list-header',
	NAVIGATOR: 'ons-navigator',
}
export const RESERVE_SELECTORS = {
	MAIN_LIST: `${SHARED_SELECTORS.NAVIGATOR} > ons-page > div.page__content > div > div > ons-card > ons-list > div > div:nth-child(3)`,
	MAIN_CONTAINER: `${SHARED_SELECTORS.NAVIGATOR} > ons-page > div.page__content > div > div`,
	LIST_PAGE: `${SHARED_SELECTORS.NAVIGATOR} > ons-page > div.page__content > div > div` as const,
}
export const VACANSY_SELECTORS = {
	PAGE: 'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div' as const,
	BUTTONS_CONTAINER:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div > div' as const,
	SHOP_ID:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div > ons-list-item:nth-child(2) > div' as const,
	MAP_LINK:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div > ons-list-item:nth-child(13) > div > div:nth-child(1) > a',
}
