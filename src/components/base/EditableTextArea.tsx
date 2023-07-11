import React, { ChangeEvent, useEffect, useState } from 'react'
interface Props {
  value: string
  update: (e: string) => void
  className?: string
}
import classNames from 'classnames'
const EditableTextArea = ({ value: _value, className, update }: Props) => {
  const [value, setValue] = useState<string>('')
  const [isEditing, setIsEditing] = useState(false)
  const handleKeyDown = (event: KeyboardEventInit) => {
    if (event.ctrlKey && event.keyCode === 13) {
      setIsEditing(false)
    }
  }
  const handleBlur = () => {
    setIsEditing(false)
  }
  const handleClick = () => {
    setIsEditing(true)
  }
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    update(e.target.value)
  }

  useEffect(() => {
    setValue(_value)
  }, [_value])

  return (
    <>
      {isEditing ? (
        <textarea
          className="w-full px-0 text-sm text-gray-900 bg-white border-0"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div
          className="whitespace-pre-wrap text-sm text-left"
          onClick={handleClick}
        >
          {value || 'Click to edit'}
        </div>
      )}
    </>
  )
}
export default EditableTextArea
