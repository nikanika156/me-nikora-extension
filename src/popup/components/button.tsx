import { type LucideProps } from 'lucide-react'

interface Button {
	callBack: () => void | Promise<void>
	Icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
	>
	text?: string
	size: number
	isActive?: boolean
	// iconPreferences:
}
export function Button({ callBack, Icon, text, size, isActive = true }: Button) {
	return (
		<button
			onClick={() => {
				if (callBack) {
					callBack()
				}
			}}
			disabled={!isActive}
			className={`flex items-center cursor-pointer disabled:cursor-not-allowed  bg-[#820024] text-white px-2 py-1.5 disabled:bg-[#ccc]`}
		>
			<Icon size={size} />
			<p style={{ fontSize: size }}>{text}</p>
		</button>
	)
}
