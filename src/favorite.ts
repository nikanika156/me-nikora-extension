import type { actionStatus } from './shared/types/types'
const stateIsNotInited = { message: 'state is not inited', status: false }
export class Favorite {
	private onChangeArr: ((chnage: chrome.storage.StorageChange) => void)[] = []
	constructor() {
		chrome.storage.onChanged.addListener(change => {

			
			const newVal = change.config.newValue as string[]
			this.config = newVal
			// }}
			if (this.onChangeArr.length === 0) return
			const { config } = change as { config: chrome.storage.StorageChange }
			if (config) {
				this.onChangeArr.map(cb => {
					cb(config)
				})
			}
		})
	}

	// ID-ების მასივი
	config: string[] = []

	readonly IMMUTABLE_IDS: string[] = import.meta.env.VITE_IMMUTABLE_IDS
		? import.meta.env.VITE_IMMUTABLE_IDS.split(',')
		: ([] as const)
	// ცვლადი, რომელიც მიგვანიშნებს, დასრულდა თუ არა მონაცემების ჩატვირთვა storage-დან
	isInited = false

	onChange(cb: (change: chrome.storage.StorageChange) => void) {
		if (!this.isInited) return console.error('object is not inited')
		this.onChangeArr.push(cb)
	}
	// ფუნქცია chrome.storage-დან მონაცემების წამოსაღებად
	async getList(): Promise<actionStatus> {
		try {
			const storage = await chrome.storage.local.get()
			const storageConfig = (storage.config as string[]) || []

			// ვნიშნავთ, რომ ინიციალიზაცია წარმატებით დასრულდა და ვანახლებთ ობიექტის კონფიგურაციას არსებული მონაცემებით
			this.isInited = true
			// this.setConfig(storageConfig)
			this.config = storageConfig
			// this.config.push('132')

			return { message: 'Config loaded', status: true }
		} catch (e) {
			return { message: 'storage error', status: false }
		}
	}
	// შიდა ფუნქცია მასივის განახლებისთვის და შენახვისთვის. განახლებულ მასივს ბრაუზერის მეხსიერებაში ინახავს.
	private async setConfig(newConfig: string[]) {
		try {
			await chrome.storage.local.set({ config: newConfig })
		} catch (e) {
			console.error(e)
			throw e
		}
	}

	// ახალი ID-ის დამატების ლოგიკა
	add(id: string): actionStatus {
		if (!this.isInited) return stateIsNotInited
		if (this.includes(id)) {
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
	toggle(id: string): actionStatus {
		const add = this.add(id)
		if (add.status === false) {
			return this.remove(id)
		}
		return add
	}
	includes(id: string) {
		return this.IMMUTABLE_IDS.includes(id) || this.config.includes(id)
	}
}
export const favorite = new Favorite()
