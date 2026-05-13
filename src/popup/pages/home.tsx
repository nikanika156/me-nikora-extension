import { nikoraApi } from '../../background/api/api-auth-key'
import { getTabId } from '../../shared/get-tabid'
import { sendExtensionMessage } from '../../shared/send-extension-message'
import { Button } from '../components/button'
import { IdAddInput } from '../components/id-add-input'
import { IdList } from '../components/id-list'

export function Home() {
	return (
		<>
			<IdAddInput />
			<IdList />
			<Button
				size={20}
				text='123'
				callBack={async () => {
					console.log(await nikoraApi.get())
				}}
			/>
		</>
	)
}
