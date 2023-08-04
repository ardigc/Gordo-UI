import { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'

const meta = {
  component: Alert,
  title: 'GordoUI/Alert',
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>
export const success: Story = {
  args: {
    children: 'sdfsdfs',
  },
}
export const warning: Story = {
  args: {
    children: 'sdfsdfs',
    severity: 'warning',
  },
}
