class appState {
	// ID-ების მასივი
	config: string[] = []
	// gitignore
	readonly DEFAULT_IDS: string[] = import.meta.env.VITE_DEFAULT_IDS
		? import.meta.env.VITE_DEFAULT_IDS.split(',')
		: ([] as const)
	// ცვლადი, რომელიც მიგვანიშნებს, დასრულდა თუ არა მონაცემების ჩატვირთვა storage-დან
	isInited = false

	// ფუნქცია chrome.storage-დან მონაცემების წამოსაღებად
	async getConfig() {
		console.log(this.DEFAULT_IDS);
		
		const storage = await chrome.storage.local.get()
		const storageConfig = storage ? (storage?.config as string[]) : null

		if (storageConfig && storageConfig.length > 0) {
			// ვნიშნავთ, რომ ინიციალიზაცია წარმატებით დასრულდა და ვანახლებთ ობიექტის კონფიგურაციას არსებული მონაცემებით
			this.isInited = true
			this.setConfig(storageConfig)
		}
		this.isInited = true
		return
	}
	testAdd(id: string) {
		if (!this.isInited) return
		if (this.config.includes(id) || this.DEFAULT_IDS.includes(id)) {
			console.log(`#${id} is alredy exist`)
			return
		}

		console.log(`#${id} was successfuly added`)
		this.config = [...this.config, id]
	}
	// შიდა ფუნქცია მასივის განახლებისთვის და შენახვისთვის. განახლებულ მასივს ბრაუზერის მეხსიერებაში ინახავს.
	private setConfig(newConfig: string[]) {
		this.config = newConfig
		chrome.storage.local.set({ config: this.config })
	}

	// ახალი ID-ის დამატების ლოგიკა
	add(id: string) {
		if (!this.isInited) return
		if (this.config.includes(id) || this.DEFAULT_IDS.includes(id)) {
			console.error(`#${id} is alredy exist`)
			return
		}

		console.log(`#${id} was successfuly added`)
		const newConfig = [...this.config, id]
		this.setConfig(newConfig)
	}

	// არსებული ID-ის წაშლის ლოგიკა
	remove(id: string) {
		if (!this.isInited) return

		if (this.config.includes(id)) {
			const newConfig = this.config.filter(item => item != id)
			this.setConfig(newConfig)
			console.log(`#${id} was successfuly removed`)
		} else {
			console.error(`#${id} is not exist`)
			return
		}
	}
}

export const state = new appState()
