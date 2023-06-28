import { Meta, StoryObj } from '@storybook/react'
import Tooltip, { TooltipProps } from './Tooltip'

const meta = {
  component: Tooltip,
  title: 'GordoUI/Tooltip',
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>
export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    children: 'hola',
  },
}
