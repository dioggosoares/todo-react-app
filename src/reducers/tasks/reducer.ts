import { produce } from 'immer'

// IMPORT ACTIONS TYPES
import { ActionTypes } from './actions'

export interface Task {
  id: string
  task: string
  finished: boolean
}

interface TaskState {
  tasks: Task[]
  currentTaskId: string | null
}

export function tasksReducer(state: TaskState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TASK:
      return produce(state, (draft) => {
        draft.tasks.push(action.payload.newTask)
        draft.currentTaskId = action.payload.newTask.id
      })
    case ActionTypes.MARK_CURRENT_TASK_AS_FINISHED:
      return produce(state, (draft) => {
        const currentTaskIndex = state.tasks.findIndex((task) => {
          return task.id === action.payload.idTask
        })

        if (currentTaskIndex < 0) {
          return state
        }

        return produce(state, (draft) => {
          draft.tasks[currentTaskIndex].finished = action.payload.updateTask
        })
      })
    case ActionTypes.DELETE_CURRENT_TASK:
      return produce(state, (draft) => {
        draft.tasks.splice(action.payload.id, 1)
      })
    default:
      return state
  }
}
