import { useState } from 'react'
import Modal from '@components/base/Modal'
import Label from '@components/base/Label'
import EditableCheckGroup from '@components/base/EditableCheckGroup'
import EditableInput from '@components/base/EditableInput'
import EditableTextArea from '@components/base/EditableTextArea'
interface Props {
  allTags: Array<string>
}
const CVModal = ({ allTags }: Props) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [tags, setTags] = useState<Array<string>>([])

  return (
    <>
      <button
        className="inline float-right py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 hover:bg-blue-800"
        onClick={() => setOpen(true)}
      >
        New
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <Label label="Title">
          <EditableInput value={title} update={setTitle} />
        </Label>
        <Label label="Content">
          <EditableTextArea value={content} update={setContent} />
        </Label>
        <Label label="Tags">
          <EditableCheckGroup tags={tags} update={setTags} allTags={allTags} />
        </Label>
      </Modal>
    </>
  )
}
export default CVModal
