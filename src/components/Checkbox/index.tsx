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
    <div id={`checkboxCustom_${index}`} className="relative flex">
      <button
        type="button"
        className={
          isChecked
            ? 'bg-primary-500 border-primary-500 w-[1.125rem] h-[1.125rem] rounded-full checked'
            : 'bg-gray-500 border border-secondary-300 w-[1.125rem] h-[1.125rem] rounded-full '
        }
        onClick={() => handleMarkCurrentTaskAsFinished(id)}
        id={`checkbox_${index}`}
      />
    </div>
  )
}
