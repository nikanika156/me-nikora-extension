export function getAuthKey() {
	const token = localStorage.getItem('auth')
	return token && token
}
