import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

// IMPORT COMPONENTS
import { NewTaskForm } from './components/NewTaskForm'
import { History } from './components/History'

// IMPORT CONTEXTS
import { TaskContext } from '../../contexts/TaskContext'

const newTaskFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
})

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>

export function Home() {
  const { createNewTask } = useContext(TaskContext)

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      task: '',
    },
  })

  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = newTaskForm

  function handleCreateTask(data: NewTaskFormData) {
    createNewTask(data)
    reset()
  }

  const task = watch('task')

  return (
    <main className="flex flex-col w-full max-w-screen-1xl items-center justify-center mx-auto">
      <div className="absolute top-[10.625rem]">
        <form onSubmit={handleSubmit(handleCreateTask)}>
          <FormProvider {...newTaskForm}>
            <NewTaskForm />
            {errors.task?.message && (
              <span className="ml-4 text-red-500">{errors.task?.message}</span>
            )}
          </FormProvider>
        </form>
      </div>
      <History />
    </main>
  )
}
