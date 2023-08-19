type Props = {
	label?: string
	isChecked: boolean
	onToggle?: () => void
}

export const Toggle = ({ label, isChecked, onToggle }: Props) => (
	<form className="flex justify-between items-center">
		{label && <div className="text-white font-semibold">{label}</div>}
		<label className="relative flex items-center cursor-pointer">
			<input
				type="checkbox"
				checked={isChecked}
				onChange={() => onToggle && onToggle()}
				className="sr-only peer"
			/>

			<div className="w-14 h-7 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all border-gray-600 peer-checked:bg-blue-600" />
		</label>
	</form>
)
