import type { GetConfig, Message } from '../shared/types/types'
import { favorite } from '../favorite'
// export function handleState() {
// 	chrome.runtime.onMessage.addListener((message: Message<string>, sender, sendResponse) => {
// 		sender
// 		if (message.action == 'GET_CONFIG') {
// 			// if(favorite.)
// 			const Response: GetConfig = {
// 				data: { config: favorite.config, immutableConfig: favorite.IMMUTABLE_IDS },
// 				log: 'config was sended',
// 			}

// 			sendResponse(Response)
// 		} else if (message.action === 'ADD_ID') {
// 			if (!message.data) {
// 				sendResponse('ID is missing')
// 				return
// 			}
// 			sendResponse(favorite.add(message.data))
// 		} else if (message.action === 'REMOVE_ID') {
// 			if (message.data) {
// 				sendResponse(favorite.remove(message.data))
// 			}
// 		} else if (message.action === 'TOGGLE_ID') {
// 			if (!message.data) return
// 			const addId = favorite.add(message.data)

// 			if (!addId.status && addId.message === 'Alredy exist') {
// 				favorite.remove(message.data)
// 				console.log('success remove')
// 				console.log(favorite.config)

// 				return
// 			}
// 			console.log('success add')
// 			console.log(favorite.config)
// 		}
// 	})
// }
