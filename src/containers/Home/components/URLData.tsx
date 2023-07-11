import { FC, useState, useEffect } from 'react'
import EditableTextArea from '@components/base/EditableTextArea'
import MultiSelect from '@components/base/MultiSelect'
import EditableInput from '@components/base/EditableInput'
import EditableCheckGroup from '@components/base/EditableCheckGroup'
import EditableListStack from '@components/base/EditableListStack'
import Label from '@components/base/Label'
interface URLDataProps {
  title: string
  content: string
  rate: number
  urls: Array<string>
  tags: Array<string>
  allTags: Array<string>
}
const URLData: FC<URLDataProps> = (props: URLDataProps) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [rate, setRate] = useState<number>(0)
  const [urls, setUrls] = useState<Array<string>>([])
  const [tags, setTags] = useState<Array<string>>([])
  // const

  // 👎
  useEffect(() => {
    setTitle(props.title)
    setContent(props.content)
    setRate(props.rate)
    setTags(props.tags)
  }, [props])
  return (
    <div>
      {/* {data.content}😄 */}
      <div className="w-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <Label label="Title">
          <EditableInput value={props.title} update={setTitle} />
        </Label>
        <Label label="Content">
          <EditableTextArea value={props.content} update={setContent} />
        </Label>
        <Label label="Urls">
          <EditableListStack value={props.urls} update={setUrls} />
        </Label>
        <Label label="Tags">
          <EditableCheckGroup
            tags={props.tags}
            allTags={props.allTags}
            update={setTags}
          />
        </Label>
        <div className="flex items-center justify-center px-3 py-2 border-t">
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Save
          </button>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700  focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Remove
          </button>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-yellow-700   focus:ring-blue-200 hover:bg-blue-800"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  )
}
export default URLData
