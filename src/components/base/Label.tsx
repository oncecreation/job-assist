import { ReactNode } from 'react'
interface Props {
  label: string
  children: ReactNode
}
const Label = ({ label, children }: Props) => {
  return (
    <div className="relative px-4  bg-white divide-y divide-slate-500">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      {children}
    </div>
  )
}
export default Label
