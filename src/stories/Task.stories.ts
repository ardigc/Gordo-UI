import type { Meta, StoryObj } from '@storybook/react'

import { Task } from './Task'
const meta = {
  component: Task,
  title: 'Me/Task',
  tags: ['autodocs'],
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
