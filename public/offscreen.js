setInterval(() => {
	// console.log('wake up')
	chrome.runtime.sendMessage('KEEP_AWAKE')
}, 20000)
