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
  handleCheckTodoFinished: () => void
}

interface TaskContextProviderProps {
  children: ReactNode
}

// CONTEXT
export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [isTaskFinished, setIsTaskFinished] = useState(true)
  const [countTaskFinished, setCountTaskFinished] = useState(0)

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

  function handleToogleTaskStatus() {
    setIsTaskFinished((prevIsTaskFinished) => !prevIsTaskFinished)
  }

  function handleCheckTodoFinished() {
    let filterTask = tasks
    filterTask = filterTask.filter((e) => {
      return e.finished === true
    })

    setCountTaskFinished(filterTask.length)
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
    handleCheckTodoFinished()
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(taskState)
    localStorage.setItem(nameStorageData, stateJSON)
    handleCheckTodoFinished()
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
        handleCheckTodoFinished,
        countTaskFinished,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
