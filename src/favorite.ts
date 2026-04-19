import type { actionStatus } from './shared/types/types'
const stateIsNotInited = { message: 'state is not inited', status: false }
class Favorite {
	// ID-ების მასივი
	config: string[] = []
	readonly IMMUTABLE_IDS: string[] = import.meta.env.VITE_IMMUTABLE_IDS
		? import.meta.env.VITE_IMMUTABLE_IDS.split(',')
		: ([] as const)
	// ცვლადი, რომელიც მიგვანიშნებს, დასრულდა თუ არა მონაცემების ჩატვირთვა storage-დან
	isInited = false

	// ფუნქცია chrome.storage-დან მონაცემების წამოსაღებად
	async getList(): Promise<actionStatus> {

		try {
			const storage = await chrome.storage.local.get()
			const storageConfig = (storage.config as string[]) || []

			// ვნიშნავთ, რომ ინიციალიზაცია წარმატებით დასრულდა და ვანახლებთ ობიექტის კონფიგურაციას არსებული მონაცემებით
			this.isInited = true
			this.setConfig(storageConfig)
			return { message: 'Config loaded', status: true }
		} catch (e) {
			return { message: 'storage error', status: false }
		}
	}
	// testAdd(id: string) {
	// 	if (!this.isInited) return
	// 	if (this.config.includes(id) || this.IMMUTABLE_IDS.includes(id)) {
	// 		console.log(`#${id} is alredy exist`)
	// 		return
	// 	}

	// 	console.log(`#${id} was successfuly added`)
	// 	this.config = [...this.config, id]
	// }
	// შიდა ფუნქცია მასივის განახლებისთვის და შენახვისთვის. განახლებულ მასივს ბრაუზერის მეხსიერებაში ინახავს.
	private setConfig(newConfig: string[]) {
		this.config = newConfig
		chrome.storage.local.set({ config: this.config })
	}

	// ახალი ID-ის დამატების ლოგიკა
	add(id: string): actionStatus {
		if (!this.isInited) return stateIsNotInited
		if (this.config.includes(id) || this.IMMUTABLE_IDS.includes(id)) {
			return { message: `Alredy exist`, status: false }
		}

		const hasLeters = /[a-zA-Z]/.test(id)
		const isRightLength = id.length === 3
		if (hasLeters || !isRightLength) return { message: 'Incorrect ID', status: false }
		const newConfig = [...this.config, id]
		this.setConfig(newConfig)
		return { message: `#${id} was successfuly added`, status: true }
	}

	// არსებული ID-ის წაშლის ლოგიკა
	remove(id: string): actionStatus {
		if (!this.isInited) return stateIsNotInited

		if (this.config.includes(id)) {
			const newConfig = this.config.filter(item => item != id)
			this.setConfig(newConfig)
			return {
				message: `#${id} was successfuly removed`,
				status: true,
			}
		} else {
			return {
				message: `#${id} is not exist`,
				status: false,
			}
		}
	}
	includes(id: string) {
		return this.IMMUTABLE_IDS.includes(id) || this.config.includes(id)
	}
}
export const favorite = new Favorite()
