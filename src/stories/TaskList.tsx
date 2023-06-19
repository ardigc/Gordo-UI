// https://storybook.js.org/tutorials/intro-to-storybook/react/es/composite-component/
// crear la lista de tareas

import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'

import {Task} from './Task';
import Skeleton from 'react-loading-skeleton';

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }:{loading: boolean, tasks:any, onPinTask:React.Dispatch<React.SetStateAction<any>>, onArchiveTask: React.Dispatch<React.SetStateAction<any>>}) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className='w-32 prose'>
      <Skeleton  height={30} />
    </div>
  );
  if (loading) {
    return (
      <div className="list-items w-32" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  const tasksInOrder = [
    ...tasks.filter((t: { state: string; }) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t: { state: string; }) => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}