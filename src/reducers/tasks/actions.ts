import { Task } from './reducer'

export enum ActionTypes {
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  MARK_CURRENT_TASK_AS_FINISHED = 'MARK_CURRENT_TASK_AS_FINISHED',
  DELETE_CURRENT_TASK = 'DELETE_CURRENT_TASK',
}

export function addNewTaskAction(newTask: Task) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload: {
      newTask,
    },
  }
}

export function deleteCurrentTaskAction(id: number) {
  return {
    type: ActionTypes.DELETE_CURRENT_TASK,
    payload: {
      id,
    },
  }
}

export function updateCurrentTaskStatusAction(
  idTask: string,
  updateTask: boolean,
) {
  return {
    type: ActionTypes.MARK_CURRENT_TASK_AS_FINISHED,
    payload: {
      idTask,
      updateTask,
    },
  }
}
