import { NavLink } from 'react-router'
interface NavToProps {
	to: string
	text: string
	className?: string
}
export function NavTo({ to, text, className }: NavToProps) {
	return (
		<>
			<NavLink  to={to} end>
				<p className={className}>{text}</p>
			</NavLink>
		</>
	)
}
