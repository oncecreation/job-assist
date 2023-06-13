import { FC } from 'react'

const mockData: Array<any> = [
  {
    id: 0,
    type: 'cv'
  }
]
const Accordian: FC = () => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {mockData.map((el) => (
        <Accordian />
      ))}
    </ul>
  )
}
