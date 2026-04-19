import { Plus } from 'lucide-react'

import { sendExtensionMessage } from '../../shared/send-extension-message'
import { Button } from './button'
import { favorite } from '../../favorite'

export function Input() {
	let inputValue: string

	return (
		<>
			<div className='flex-1 flex bg-[#E9E9E9] overflow-hidden rounded-xl'>
				<input
					// value={'12'}
					className=' outline-0 px-2 flex-1 min-w-0 text-[17px] h-10'
					type='text'
					pattern='[0-9]*'
					inputMode='numeric'
					maxLength={3}
					placeholder='ID...'
					onInput={e => {
						inputValue = e.currentTarget.value
					}}
					// onInput={sliceInputValue}
				/>

				<Button
					callBack={() => {
						favorite.add(inputValue)
					}}
					Icon={Plus}
					text='Add'
					size={15}
				/>
			</div>
		</>
	)
}
