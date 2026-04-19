import { Trash2 } from 'lucide-react'

import { Button } from './button'
interface ListItemProps {
	data: string
	activeButton?: boolean
	callback?: () => void | Promise<void>
	style?: string | null
	showButton?: boolean
}
export function ListItem({
	data,
	showButton = true,
	activeButton = true,
	callback,
	style = null,
}: ListItemProps) {
	return (
		<li key={data} className={style ? style : ` pl-2 flex items-center border border-white rounded-xl overflow-hidden justify-between shadow text-[18px]`}>
			<div className=''>
				<p>{data}</p>
			</div>
			{showButton && (
				<Button
					callBack={() => {
						if (callback) callback()

					}}
					Icon={Trash2}
					text='Remove'
					size={17}
					isActive={activeButton}
				/>
			)}
		</li>
	)
}
