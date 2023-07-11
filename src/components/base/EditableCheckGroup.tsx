import React, { ChangeEvent, useState } from 'react'
import classNames from 'classnames'
interface Props {
  tags: Array<string>
  allTags: Array<string>
  update: (e: Array<string>) => void
}

const EditableCheckGroup = ({ tags, update, allTags }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const toggleItem = (e: string) => {
    if (!tags.includes(e)) update([...tags, e])
    else update(tags.filter((el: string) => el !== e))
  }
  return (
    <>
      <div className="text-3xl font-bold tracking-tight text-gray-900 grid grid-flow-row-dense lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
        {allTags.map((tag, index) => {
          return (
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  onClick={() => toggleItem(tag)}
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
        })}
      </div>
    </>
  )
}
export default EditableCheckGroup
