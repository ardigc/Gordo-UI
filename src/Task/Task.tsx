import './task.css'
import React from 'react'
import { StarIcon, StarIconFilled } from '../components/icons/Icons'
export interface TaskProps {
  task: {
    id: string
    title: string
    state: string
  }
  onArchiveTask: React.Dispatch<React.SetStateAction<any>>
  onPinTask: React.Dispatch<React.SetStateAction<any>>
}
export function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>

      <label htmlFor="title" aria-label={title} className="title ">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          {state !== 'TASK_PINNED' && (
            <span className={`icon-star`}>
              <StarIcon />
            </span>
          )}

          {state === 'TASK_PINNED' && (
            <span className={`icon-star`}>
              <StarIconFilled />
            </span>
          )}
        </button>
      )}
    </div>
  )
}
