// https://storybook.js.org/tutorials/intro-to-storybook/react/es/composite-component/
// crear la lista de tareas

import React from 'react';

import {Task} from './Task';

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }:{loading: boolean, tasks:any, onPinTask:React.Dispatch<React.SetStateAction<any>>, onArchiveTask: React.Dispatch<React.SetStateAction<any>>}) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task: { id: string, title: string; state: string; }) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}