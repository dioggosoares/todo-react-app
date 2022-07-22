import { useFormContext } from 'react-hook-form'
import { PlusCircle } from 'phosphor-react'

export function NewTaskForm() {
  const { register } = useFormContext()

  return (
    <div className="flex w-full max-w-x1 items-center justify-center gap-2">
      <input
        id="task"
        placeholder="Adicione uma nova tarefa"
        className="bg-gray-500 w-[39.875rem] p-4 rounded-lg border border-gray-700 text-gray-300 placeholder-gray-300 focus:outline-0 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-500 transition-all duration-500 ease-in-out"
        {...register('task')}
      />
      <button
        type="submit"
        className="bg-secondary-500 flex items-center justify-center p-4 rounded-lg gap-2 hover:bg-secondary-300 transition-all delay-150 ease-linear"
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  )
}
