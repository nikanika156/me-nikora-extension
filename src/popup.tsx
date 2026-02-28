import { state } from './state'

export function PopUp() {
	// const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

	return (
		<div className=''>
			<div className='flex '>
				<input type='text' />
				<button>Add</button>
			</div>
			<div className=''>
				<ul className='grid'>
					{state.config.map(shopId => (
						<li>
							<span>{shopId}</span>
							<button>X</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
