// https://storybook.js.org/tutorials/intro-to-storybook/react/es/composite-component/
// crear la lista de tareas

import React from 'react'

import { Task, TaskProps } from './Task'

export default function TaskList({
  loading = false,
  tasks,
  onPinTask,
  onArchiveTask,
}: {
  loading?: boolean
  tasks: Array<TaskProps['task']>
  onPinTask: React.Dispatch<React.SetStateAction<any>>
  onArchiveTask: React.Dispatch<React.SetStateAction<any>>
}) {
  const events = {
    onPinTask,
    onArchiveTask,
  }

  const LoadingRow = (
    <div className="my-1">
      <span className="glow-checkbox" />
      <span className="glow-text w-fit flex">
        <span className="animate-pulse text-transparent bg-zinc-300 mr-1 rounded-lg">
          Loading
        </span>{' '}
        <span className="animate-pulse text-transparent bg-zinc-300 mr-1 rounded-lg">
          cool
        </span>{' '}
        <span className="animate-pulse text-transparent bg-zinc-300 rounded-lg">
          state
        </span>
      </span>
    </div>
  )
  if (loading) {
    return (
      <div className="list-items w-32" data-testid="loading" key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items" key={'empty'} data-testid="empty">
        <div className="flex flex-col items-center justify-center h-screen">
          <span className="icon-check" />
          <p className="font-bold text-lg">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    )
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ]
  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}
