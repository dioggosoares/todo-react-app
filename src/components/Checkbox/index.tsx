import { useContext } from 'react'

import { TaskContext } from '../../contexts/TaskContext'

interface CheckboxProps {
  id: string
  index: number
  isChecked: boolean
}

export function Checkbox({ id, isChecked }: CheckboxProps) {
  const { markCurrentTaskAsFinished } = useContext(TaskContext)

  function handleMarkCurrentTaskAsFinished(idTask: string) {
    markCurrentTaskAsFinished(idTask)
  }

  return (
    <div id={`rounded-checkbox_${id}`} className="roundCheckbox">
      <input
        type="checkbox"
        onChange={() => handleMarkCurrentTaskAsFinished(id)}
        id={`checkbox_${id}`}
        checked={!!isChecked}
      />
      <label htmlFor={`checkbox_${id}`} />
    </div>
  )
}
