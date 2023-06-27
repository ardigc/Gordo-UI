import { Meta, StoryObj } from '@storybook/react'
import Popover from './Popover'
const meta = {
  component: Popover,
  title: 'GordoUI/Popover',
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>
export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    open: true,
    onClose() {
      console.log('cerrando')
    },
  },
}

export const test
