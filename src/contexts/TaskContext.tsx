import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  addNewTaskAction,
  deleteCurrentTaskAction,
  updateCurrentTaskStatusAction,
} from '../reducers/tasks/actions'
import { Task, tasksReducer } from '../reducers/tasks/reducer'

const nameStorageData = '@todo-app:todo-data-1.0.0'

interface CreateTaskData {
  task: string
}

interface TaskContextType {
  tasks: Task[]
  isTaskFinished: boolean
  countTaskFinished: number
  currentTaskId: string | null
  createNewTask: (data: CreateTaskData) => void
  handleToogleTaskStatus: () => void
  deleteTask: (id: number) => void
  markCurrentTaskAsFinished: (idTask: string) => void
}

interface TaskContextProviderProps {
  children: ReactNode
}

// CONTEXT
export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [isTaskFinished, setIsTaskFinished] = useState(true)

  const [taskState, dispatch] = useReducer(
    tasksReducer,
    {
      tasks: [],
      currentTaskId: null,
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(nameStorageData)
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return {
        tasks: [],
        currentTaskId: null,
      }
    },
  )

  const { tasks, currentTaskId } = taskState

  const countTaskFinished = taskState.tasks.filter(
    (task) => task.finished,
  ).length

  function handleToogleTaskStatus() {
    setIsTaskFinished((prevIsTaskFinished) => !prevIsTaskFinished)
  }

  function deleteTask(id: number) {
    dispatch(deleteCurrentTaskAction(id))
  }

  function createNewTask(data: CreateTaskData) {
    const id = String(new Date().getTime())

    const newTask: Task = {
      id,
      task: data.task,
      finished: false,
    }

    dispatch(addNewTaskAction(newTask))
  }

  function markCurrentTaskAsFinished(idTask: string) {
    dispatch(updateCurrentTaskStatusAction(idTask, isTaskFinished))
    handleToogleTaskStatus()
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(taskState)
    localStorage.setItem(nameStorageData, stateJSON)
  }, [taskState])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        currentTaskId,
        createNewTask,
        isTaskFinished,
        handleToogleTaskStatus,
        deleteTask,
        markCurrentTaskAsFinished,
        countTaskFinished,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
