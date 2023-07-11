import Panel from '@/containers/Home/components/Panel'

const MergeBoard = () => {
  return (
    <Panel>
      <span>Merge</span>
      <div className="w-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div>
          Comming Soon
          {/* <EditableListStack className="p-4" value={tags} update={setTags} /> */}
        </div>
        <div className="flex items-center justify-center px-3 py-2 border-t">
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Apply Change
          </button>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700  focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Discard
          </button>
        </div>
      </div>
    </Panel>
  )
}
export default MergeBoard
