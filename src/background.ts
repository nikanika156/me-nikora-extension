
import { checkAlarm } from './background/constants'

import { reactOnAlarms } from './background/react-on-alarms'
import { favorite } from './favorite'
import { setOffscreen } from './background/set-offscreen'

//

chrome.runtime.onStartup.addListener(() => {
	setOffscreen('offscreen.html')
})
chrome.runtime.onInstalled.addListener(() => {
	setOffscreen(chrome.runtime.getURL('offscreen.html'))
	chrome.alarms.create(checkAlarm.name, { periodInMinutes: checkAlarm.interval })
})
chrome.runtime.onMessage.addListener(message => {
	if (message.type == 'KEEP_AWAKE') {
		console.log('wake wakee')
	}
})
async function startBackground() {
	await favorite.getList()
	reactOnAlarms()
}
startBackground()
