import { useContext } from 'react'

import { TaskContext } from '../../contexts/TaskContext'

interface CheckboxProps {
  id: string
  index: number
  isChecked: boolean
}

export function Checkbox({ id, index, isChecked }: CheckboxProps) {
  const {
    handleCountTaskFinished,
    handleToogleTaskStatus,
    markCurrentTaskAsFinished,
  } = useContext(TaskContext)

  function handleMarkCurrentTaskAsFinished(idTask: string) {
    markCurrentTaskAsFinished(idTask)
    handleToogleTaskStatus()
    handleCountTaskFinished()
  }

  return (
    <div id={`rounded-checkbox_${index}`} className="roundCheckbox">
      <input
        type="checkbox"
        onChange={() => handleMarkCurrentTaskAsFinished(id)}
        id={`checkbox_${index}`}
        checked={!!isChecked}
      />
      <label htmlFor={`checkbox_${index}`} />
    </div>
  )
}
