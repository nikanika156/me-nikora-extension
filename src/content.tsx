import { state } from './state'
import { observer } from './content/observer'
import './index.css'
async function startApp() {
	await state.getConfig()
	state.remove('744')
	// console.log('starting observer')
	observer()
}
startApp()
