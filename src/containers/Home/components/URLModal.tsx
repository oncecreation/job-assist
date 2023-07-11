import { useState } from 'react'
import Modal from '@components/base/Modal'
import Label from '@components/base/Label'
import EditableCheckGroup from '@components/base/EditableCheckGroup'
import EditableInput from '@components/base/EditableInput'
import EditableTextArea from '@components/base/EditableTextArea'
import EditableListStack from '@components/base/EditableListStack'
interface Props {
  allTags: Array<string>
}
const URLModal = ({ allTags }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [urls, setUrls] = useState<Array<string>>([])
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
        <Label label="Urls">
          <EditableListStack value={urls} update={setUrls} />
        </Label>
        <Label label="Tags">
          <EditableCheckGroup tags={tags} allTags={allTags} update={setTags} />
        </Label>
      </Modal>
    </>
  )
}
export default URLModal
