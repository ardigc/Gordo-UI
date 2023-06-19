import type { Meta, StoryObj } from '@storybook/react'

import { Task } from './Task'
const meta = {
  component: Task,
  title: 'Me/Task',
  tags: ['autodocs'],

  // task: {
  //     id: '1',
  //     title: 'Test Task',
  //     state: 'TASK_INBOX',
  //   },
} satisfies Meta<typeof Task>
export default meta
type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
}
// export const Default{
//     component: Task,
//     tittle:'Task',
// };
// const Template = args => <Task {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   task: {
//     id: '1',
//     title: 'Test Task',
//     state: 'TASK_INBOX',
//   },
// };

export const Pinned: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_PINNED',
    },
  },
}
export const Archived: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_ARCHIVED',
    },
  },
}

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
//   },
// };
