import type { Reserve } from '../../shared/types/api'
import { api } from '../constants'

export async function fetchReserve(authKey: string): Promise<Reserve | string> {
	try {
		const response = await fetch(api.reserve, {
			method: 'GET',
			headers: {
				accept: 'application/json',
				auth: authKey,
			},
		})
		const data = await response.json()

		if (data.msg) {
			return data
		}
		return data
	} catch (error) {
		console.log(error)
		throw error
	}
}
