import { Plus } from 'lucide-react'

import { sendExtensionMessage } from '../../shared/send-extension-message'
import { Button } from './button'

export function Input() {
	let inputValue: string | null = null

	

	return (
		<>
			<div className='flex-1 flex bg-[#E9E9E9] '>
				<input
					// value={'12'}
					className=' outline-0 px-1.5 flex-1 min-w-0 text-[15px]'
					type='text'
					pattern='[0-9]*'
					inputMode='numeric'
					maxLength={3}
					placeholder='ID...'
					onInput={e => {
						if (e.currentTarget.value.length > 0 && e.currentTarget.value.length < 4) {
							inputValue = e.currentTarget.value
						} else {
							inputValue = null
						}
					}}
					// onInput={sliceInputValue}
				/>

				<Button
					callBack={() => {
						// sendExtensionMessage('ADD_ID', inputValue)
					}}
					Icon={Plus}
					text='Add'
					size={15}
				/>
			</div>
		</>
	)
}
