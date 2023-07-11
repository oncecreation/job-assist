import { FC } from 'react'
interface TitleBoxProps {
  title: string
  tags: Array<string>
  timestamp: Date
  rate: number
  onClick: (e: any) => void
}
const TitleBox: FC<TitleBoxProps> = ({
  title,
  tags,
  timestamp,
  rate,
  onClick
}: TitleBoxProps) => {
  return (
    <div className="flex justify-between gap-x-6 py-5">
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <p
            className="select-none text-sm font-semibold leading-6 text-gray-900"
            onClick={onClick}
          >
            {title}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {tags.map((el: string) => (
              <span key={el}>{el}</span>
            ))}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{rate}</p>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          Updated {timestamp}
        </p>
      </div>
    </div>
  )
}

export default TitleBox
