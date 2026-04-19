export const SELECTORS = {
	LIST_PAGE: '.card > .list',
	MAIN_CONTAINER:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div' as const,
	MAIN_LIST:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div > div:nth-child(3)' as const,

	CARD_TAG: 'ons-list-item' as const,
	HEADER_TAG: 'ons-list-header' as const,
	VACANSY_PAGE:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div' as const,
	BUTTONS_CONTAINER:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div > div' as const,
	VACANSY_SHOP_ID:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div > ons-list-item:nth-child(2) > div' as const,
	VACANSY_MAP_LINK:
		'body > ons-page > div.page__content > div > div:nth-child(2) > div:nth-child(2) > ons-navigator > ons-page > div.page__content > div > div > ons-card > ons-list > div > ons-list-item:nth-child(13) > div > div:nth-child(1) > a',
}
