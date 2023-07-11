import { ComponentType, FC, ReactNode, useState } from 'react'

interface ItemProps {
  HeaderComponent: ComponentType<any>
  BodyComponent: ComponentType<any>
  data: {
    head: object
    body: object
  }
}

interface TagProps {
  id: string
  name: string
  color: string
}

const StackItem: FC<ItemProps> = ({
  data,
  HeaderComponent,
  BodyComponent
}: ItemProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { head, body } = data

  return (
    <li className="flex flex-col">
      <HeaderComponent {...head} onClick={() => setOpen(!isOpen)} />
      {isOpen && <BodyComponent {...body} />}
    </li>
  )
}
export default StackItem
