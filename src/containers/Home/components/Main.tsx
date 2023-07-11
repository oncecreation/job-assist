import { FC, useState } from 'react'
import DropdownBox from '@components/base/Dropdownbox'
import Panel from './Panel'
import Accordian from '@components/base/Stack'
import { cvData as _cvData, urlData as _urlData } from '../../../mock/data'
import TitleBox from './TitleBox'
import CVData from './CVData'
import URLData from './URLData'
import CVModal from './CVModal'
import URLModal from './URLModal'
import { tags as _tags } from '../../../mock/data'
const options: Array<string> = ['Cover Letter', 'Projects']

const CheckPanel = ({ tag, addTag, removeTag }) => {
  return (
    <div className="relative flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          id="comments"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
          {tag}
        </label>
      </div>
    </div>
  )
}
const Main: FC = () => {
  const [category, setCategory] = useState<string>('Cover Letter')
  const [searchStr, setSearchStr] = useState<string>('')
  const cvData = _cvData.map((el) => ({
    id: el.id,
    head: {
      title: el.title,
      rate: el.rate,
      tags: el.tags,
      content: el.data.content
    },
    body: {
      title: el.title,
      rate: el.rate,
      tags: el.tags,
      content: el.data.content,
      allTags: _tags
    }
  }))
  const urlData = _urlData.map((el) => ({
    id: el.id,
    head: {
      title: el.title,
      rate: el.rate,
      tags: el.tags,
      content: el.data.content
    },
    body: {
      title: el.title,
      rate: el.rate,
      tags: el.tags,
      content: el.data.content,
      urls: el.data.urls,
      allTags: _tags
    }
  }))
  return (
    <div className="min-h-screen pt-20">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            <DropdownBox
              options={options}
              selectedOption={category}
              setSelectedOption={setCategory}
            />
          </h1>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 grid grid-flow-row-dense lg:grid-cols-7 sm:grid-cols-3 xs:grid-cols-2">
            {_tags.map((el, index) => (
              <CheckPanel
                key={index}
                tag={el}
                addTag={undefined}
                removeTag={undefined}
              />
            ))}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-4 py-6 sm:px-6 lg:px-8 flex flex-row">
          <div className="basis-1/2 px-2">
            <Panel>
              <div>
                <span>Cover Letter</span>
                <CVModal allTags={_tags} />
              </div>
              <Accordian
                data={cvData}
                HeaderComponent={TitleBox}
                BodyComponent={CVData}
              />
            </Panel>
          </div>
          <div className="basis-1/2">
            <Panel>
              <div className="sticky">
                <span>Project</span>
                <URLModal allTags={_tags} />
              </div>
              <Accordian
                data={urlData}
                HeaderComponent={TitleBox}
                BodyComponent={URLData}
              />
            </Panel>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main
