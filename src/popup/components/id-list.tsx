import { useEffect, useState } from 'react'
import { sendExtensionMessage } from '../../shared/send-extension-message'

import type { GetConfig } from '../../shared/types/types'
import { ListItem } from './list-item'
import { favorite } from '../../favorite'

export function IdList() {
	const [ids, setIds] = useState<{
		config: string[]
		immutableConfig: string[]
	}>()

	useEffect(() => {
		const handleChange = (
			change: { config?: { newValue: string[]; oldValue: string } },
			areaName: string,
		) => {
			if (change.config?.newValue)
				setIds({
					config: change.config.newValue,
					immutableConfig: favorite.IMMUTABLE_IDS,
				})
		}
		chrome.storage.onChanged.addListener(handleChange)
		setIds({ config: favorite.config, immutableConfig: favorite.IMMUTABLE_IDS })
		return () => {
			chrome.storage.onChanged.removeListener(handleChange)
		}
	}, [])

	return (
		<>
			<div className=''>
				<ul className='flex flex-col gap-1'>
					{ids?.config.length === 0 && ids.immutableConfig.length === 0 && (
						<ListItem
							data='There is no favorite store'
							activeButton={false}
							style={' justify-center items-center text-[26px] py-3'}
						/>
					)}
					{ids?.immutableConfig.map(id => (
						<ListItem key={id} data={id} activeButton={false} />
					))}
					{ids?.config?.map(id => (
						<ListItem
							key={id}
							data={id}
							callback={() => {
								console.log(favorite.remove(id))
							}}
						/>
					))}
				</ul>
			</div>
		</>
	)
}
