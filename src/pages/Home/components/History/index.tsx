import { useContext, useEffect } from 'react'
import { Trash } from 'phosphor-react'

import { TaskContext } from '../../../../contexts/TaskContext'
import { Checkbox } from '../../../../components/Checkbox'

import clipboard from '../../../../assets/clipboard.svg'

export function History() {
  const { tasks, deleteTask, countTaskFinished } = useContext(TaskContext)

  return (
    <div className="flex flex-col w-full max-w-x1 items-center justify-center mt-16">
      <div className="flex w-full items-center justify-between text-sm font-bold mb-6">
        <div className="flex items-center gap-2 text-secondary-300">
          Tarefas criadas
          <span className="bg-gray-400 text-xs text-gray-200 py-[.125rem] px-2 rounded-full">
            {tasks?.length > 0 ? tasks?.length : '0'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-primary-300">
          Concluídas
          <span className="bg-gray-400 text-xs text-gray-200 py-[.125rem] px-2 rounded-full">
            {countTaskFinished + ' de ' + tasks?.length}
          </span>
        </div>
      </div>
      {tasks?.length > 0 ? (
        tasks?.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex flex-col w-full max-w-x1 items-center justify-center"
            >
              <div className="flex flex-row items-start justify-between gap-4 bg-gray-500 w-full max-w-x1 rounded-lg border border-gray-400 mb-3 py-4 px-3">
                <Checkbox
                  key={item.id}
                  id={item.id}
                  index={index}
                  isChecked={item.finished}
                />
                <span className="flex -mt-1 w-full max-w-2xl">{item.task}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="group p-1 rounded-[.25rem] hover:bg-gray-400 transition-all duration-150 ease-linear"
                >
                  <Trash
                    size={16}
                    className="group-hover:text-danger-500 transition-all duration-150 ease-linear"
                  />
                </button>
              </div>
            </div>
          )
        })
      ) : (
        <div className="flex flex-col w-full max-w-x1 items-center justify-center border-t rounded-t-lg border-gray-400">
          <div className="flex flex-col items-center justify-center text-gray-300 mt-16">
            <img src={clipboard} alt="" className="mb-4" />
            <span className="text-base text-gray-300 font-bold">
              Você ainda não tem tarefas cadastradas
            </span>
            <span className="text-base text-gray-300 font-normal">
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
