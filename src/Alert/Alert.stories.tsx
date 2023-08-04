import { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'

const meta = {
  component: Alert,
  title: 'GordoUI/Alert',
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: 'holita',
  },
}
