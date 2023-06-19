import type { Meta} from '@storybook/react'

import TaskList from './TaskList';

import * as TaskStories from './Task.stories';


const meta = {
    component: TaskList,
    title: 'Me/TaskList',
    // decorators: [(story) => <div >{story()}</div>],
    // [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
    tags: ['autodocs'],
} satisfies Meta<typeof TaskList>
export default meta
export const Default = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.jsx.
    tasks: [
      { ...TaskStories.primary.args.task, id: '1', title: 'Task 1' },
      { ...TaskStories.primary.args.task, id: '2', title: 'Task 2' },
      { ...TaskStories.primary.args.task, id: '3', title: 'Task 3' },
      { ...TaskStories.primary.args.task, id: '4', title: 'Task 4' },
      { ...TaskStories.primary.args.task, id: '5', title: 'Task 5' },
      { ...TaskStories.primary.args.task, id: '6', title: 'Task 6' },
    ],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};