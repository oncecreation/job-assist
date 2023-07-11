import { FormEvent, MouseEvent, useState } from 'react'
import classNames from 'classnames'
import EditableInput from './EditableInput'
interface Props {
  value: Array<string>
  update: (e: Array<string>) => void
  className?: string
}
const EditableListStack = ({ value, update, className }: Props) => {
  //   console.log(value)
  const [newUrl, setUrl] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    update([...value, newUrl])
  }
  const updateOne = (index: number) => (val: string) => {
    const copy = [...value]
    copy[index] = val
    update && update(copy)
  }
  const handleRemove = (index: number) => {
    const copy = [...value]
    copy.splice(index, 1)
    update(copy)
  }

  return (
    <>
      <ol className={classNames('text-left px-4', className)}>
        {value.map((el, index) => (
          <li key={index}>
            <input type="checkbox" className="mr-2" />
            <EditableInput value={el} update={updateOne(index)} />
            <button
              className="float-right "
              onClick={() => handleRemove(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
        <li className="text-center">
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setUrl(e.target.value)} />{' '}
            <button type="submit">add</button>
          </form>
        </li>
      </ol>
    </>
  )
}
export default EditableListStack
