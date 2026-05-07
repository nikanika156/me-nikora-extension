import { Plus } from 'lucide-react'
import { Button } from './button'
import { favorite } from '../../favorite'

export function IdAddInput() {
	let inputValue: string | null = null

	return (
		<>
			<div className='flex-1 flex bg-[#E9E9E9] overflow-hidden rounded-xl'>
				<input
					// value={'12'}
					className=' outline-0 px-1.5 flex-1 min-w-0 text-[17px] h-10'
					type='text'
					pattern='[0-9]*'
					inputMode='numeric'
					maxLength={3}
					placeholder='ID...'
					onInput={e => {
						inputValue = e.currentTarget.value
					}}
				/>

				<Button
					callBack={() => {
						inputValue && favorite.add(inputValue)
					}}
					Icon={Plus}
					text='Add'
					size={15}
				/>
			</div>
		</>
	)
}
