import './index.css'

import { IdList } from './components/id-list'
import { favorite } from '../favorite'
import { useEffect, useState } from 'react'
import { IdAddInput } from './components/id-add-input'
import { Button } from './components/button'
import { Navbar } from './components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/home'
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
						<Navbar />
						<Routes>
							<Route path='/index.html' element={<Home />}>
								<Route path='debug' />
							</Route>
						</Routes>
					</>
				)}
			</div>
		</div>
	)
}
