import { NavTo } from './nav-to'

export function Navbar() {
	return (
		<>
			<nav>
				<div className='flex gap-1 text-lg w-full items-center justify-around'>
					<NavTo to='/index.html' text='Home'/>

					<NavTo to='/index.html/debug' text='Debug' />
				</div>
			</nav>
		</>
	)
}
