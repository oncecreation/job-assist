import { FC, useState } from 'react'
import DropdownBox from '../components/base/Accordian/Dropdownbox'
import Panel from '../components/Panel'

const options: Array<string> = ['Cover Letter', 'Projects']

const Main: FC = () => {
  const [category, setCategory] = useState<string>('By tag')
  const [searchStr, setSearchStr] = useState<string>('')
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            <DropdownBox
              options={options}
              selectedOption={category}
              setSelectedOption={setCategory}
            />
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-4 py-6 sm:px-6 lg:px-8 flex mx:flex-row">
          <div className="basis-2/3 px-2">
            <Panel>fdasfa</Panel>
          </div>
          <div className="basis-1/3">
            <Panel>fdasfa</Panel>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main
