import { ComponentType, FC, ReactNode } from 'react'
import AccordianItem from './Item'
import Spin from '../Spin'

interface AccordionProp {
  data: Array<any>
  HeaderComponent: ComponentType<any>
  BodyComponent: ComponentType<any>
}

const Stack: FC<AccordionProp> = ({
  data,
  HeaderComponent,
  BodyComponent
}: AccordionProp) => {
  return (
    <ul role="list" className="divide-y divide-gray-100 p-4">
      {data.map((el) => (
        <AccordianItem
          key={el.id}
          data={el}
          HeaderComponent={HeaderComponent}
          BodyComponent={BodyComponent}
        />
      ))}
      {!data.length && <Spin />}
    </ul>
  )
}
export default Stack
