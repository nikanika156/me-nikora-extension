class appState {
	config: string[] = []
	isInited = false
	async getConfig() {
		const storage = await chrome.storage.local.get()
		const storageConfig = storage.config as string[]
		if (storageConfig.length <= 0) return
		// console.log(storageConfig)
		this.setConfig(storageConfig)
		this.isInited = true
	}
	private setConfig(newConfig: string[]) {
		this.config = newConfig
		chrome.storage.local.set({ config: this.config })
	}
	add(id: string) {
		if (!this.isInited) return
		if (this.config.includes(id)) {
			console.log(`#${id} is alredy exist`)
			return
		}
		console.log(`#${id} was successfuly added`)
		const newConfig = [...this.config, id]
		this.setConfig(newConfig)
		chrome.storage.local.set({ config: this.config })
	}
	remove(id: string) {
		if (!this.isInited) return
		if (this.config.includes(id)) {
			const newConfig = this.config.filter(item => item != id)
			this.setConfig(newConfig)
			console.log(`#${id} was successfuly removed`)
		}
	}
}
export const state = new appState()
