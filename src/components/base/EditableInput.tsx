import React, {
  ChangeEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  useState
} from 'react'
import classNames from 'classnames'

interface Props {
  value: string
  className?: string
  update: (e: string) => void
}

const EditableInput = ({ value: _value, update }: Props) => {
  const [value, setValue] = useState(_value)
  const [isEditing, setIsEditing] = useState(false)
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      setIsEditing(false)
      update(value)
    }
  }
  const handleBlur = () => {
    setIsEditing(false)
    update(value)
  }
  const handleClick = () => {
    setIsEditing(true)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    // update(e.target.value)
  }
  return (
    <>
      {isEditing ? (
        <input
          className="inline border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span
          className="whitespace-pre-wrap text-sm text-left w-full"
          onClick={handleClick}
        >
          {value || 'Click to edit'}
        </span>
      )}
    </>
  )
}
export default EditableInput
