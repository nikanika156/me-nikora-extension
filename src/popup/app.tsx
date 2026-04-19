import './index.css'
import { Input } from './components/input'
import { IdList } from './components/id-list'
import { favorite } from '../favorite'
import { useEffect, useState } from 'react'
export function App() {
	const [isInited, setIsInited] = useState(false)

	useEffect(() => {
		const init = async () => {
			try {
				const stateIs = await favorite.getList()
				if (stateIs) setIsInited(true)
			} catch (e) {
				throw e
			}
		}
		init()
	}, [])
	return (
		<div className='m-1.5'>
			<div
				style={{ width: window.outerWidth > 350 ? window.outerWidth + 'px' : '350px' }}
				className='flex flex-col  gap-1'
			>
				{isInited && (
					<>
						<Input />
						<IdList />
					</>
				)}
			</div>
		</div>
	)
}
