export function getAuthKey(): string | null {
	return localStorage.getItem('auth')
}
