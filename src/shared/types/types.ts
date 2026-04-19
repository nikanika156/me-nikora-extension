export type Actions =
	| 'ADD_ID'
	| 'REMOVE_ID'
	| 'GET_CONFIG'
	| 'GET_API'
	| 'GET_AUTH'
	| 'TOGGLE_ID'
	| 'INCLUDES_ID'
export interface Message<T> {
	action: Actions
	data?: T | string
}

export interface GetConfig {
	data: { config: string[]; immutableConfig: string[] }
	log: string
}
export type AddIdResponse =
	| {
			succes: true
			message: string
	  }
	| { success: false; error: string }
export type GetConfigResponse =
	| {
			success: true
			config: string[]
	  }
	| {
			success: false
			error: string
	  }
export type RemoveIdResponse =
	| {
			success: true
			removedId: string
	  }
	| {
			success: false
			error: string
	  }
// export type  ActionResponse =
export type actionStatus = {
	status: boolean
	message: string
}
