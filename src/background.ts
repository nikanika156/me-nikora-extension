import { alarmName } from './background/alarms-name'
// import { handleState } from './background/handle-state'
import { reactOnAlarms } from './background/react-on-alarms'
import { favorite } from './favorite'
async function startBackground() {
	await favorite.getList()

	// handleState()
}
chrome.runtime.onInstalled.addListener(() => {
	chrome.alarms.create(alarmName, { delayInMinutes: 0.025, periodInMinutes: 0.1 })
})
reactOnAlarms()
startBackground()
