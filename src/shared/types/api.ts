export type historyItem = {
	com2: null | string
	id: number
	position_name: string
	rate2: null | string
	shop_code: string
}
export type District = {
	district: string
	id: number
	region_name: string
}
export type ShopItem = {
	code: string
	district_id: number
	fictitious_address: string
	id: number
	manager_mobile: string
	map: string
}
export type ReserveItem = {
	district: District
	end_time: string
	id: number
	position_id: number
	salary: string
	schedule: string
	shop: ShopItem
	shop_id: number
	start_time: string
	work_time: string
}
export type PositionItem = {
	code: string
	id: number
	monthShiftsPoints: number
	title: string
}
export interface Reserve {
	history: historyItem[]
	items: {
		[DataKey: string]: ReserveItem[] | ReserveItem
	}
	now?: ReserveItem | null
	positions?: PositionItem[]
	shop?: ShopItem[]
}
