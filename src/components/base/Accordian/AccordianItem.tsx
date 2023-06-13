import { FC, useState } from 'react'

interface ItemProps {
  id: string
  title: string
  tags: Array<object>
  rate: number
  timestamp: Date
  DataComponent: FC
  data: object
}

interface TagProps {
  id: string
  name: string
  color: string
}

const AccordianItem: FC = ({
  id,
  title,
  tags,
  rate,
  timestamp,
  data,
  DataComponent
}: ItemProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const renderTags = (tags: Array<object>) =>
    tags.map((el: object) => <span>{el}</span>)

  return (
    <li key={id} className="flex justify-between gap-x-6 py-5">
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {title}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {renderTags(tags)}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{rate}</p>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          Last seen{' '}
          <time dateTime={timestamp.toLocaleDateString()}>
            {timestamp.toLocaleDateString()}
          </time>
        </p>
      </div>
    </li>
  )
}
