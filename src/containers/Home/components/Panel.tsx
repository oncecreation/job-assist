import { FC } from 'react'
import type { ReactNode } from 'react'
interface Props {
  children?: ReactNode | ReactNode[]
}
const Panel: FC = ({ children }: Props) => {
  return (
    <div className="rounded-2xl bg-gray-50 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-4 px-4">
      {children}
    </div>
  )
}
export default Panel
