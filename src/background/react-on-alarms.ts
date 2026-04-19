import { alarmName } from './alarms-name'
import { currentVacansys } from './current-vacansys'
import { vacansysFilter } from './vacansys-filter'
// "

export function reactOnAlarms() {
	chrome.alarms.onAlarm.addListener(async alarm => {
		if (alarmName == alarm.name) {
			try {
				const vacansys = await currentVacansys()
				const check = await vacansysFilter(vacansys)
			} catch (e) {
				throw e
			}
		}
		console.log(alarm.name)
	})
}
