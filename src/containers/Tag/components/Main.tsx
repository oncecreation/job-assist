import EditableListStack from '@/components/base/EditableListStack'
import Panel from '@/containers/Home/components/Panel'
import { useEffect, useState } from 'react'
interface Props {
  allTags: Array<string>
  applyChange: (e: Array<string>) => Promise<any>
}
const MainBoard = ({ allTags, applyChange }: Props) => {
  const [tags, setTags] = useState<Array<string>>([])
  const onDiscard = () => {
    setTags(allTags)
  }
  useEffect(() => {
    setTags(allTags)
  }, [allTags])
  return (
    <Panel>
      <span>Add & Remove</span>
      <div className="w-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div>
          <EditableListStack className="p-4" value={tags} update={setTags} />
        </div>
        <div className="flex items-center justify-center px-3 py-2 border-t">
          <button
            type="submit"
            onClick={() => applyChange(tags)}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700  hover:bg-blue-800"
          >
            Apply Change
          </button>
          <button
            type="submit"
            onClick={onDiscard}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700   hover:bg-blue-800"
          >
            Discard
          </button>
        </div>
      </div>
    </Panel>
  )
}
export default MainBoard
