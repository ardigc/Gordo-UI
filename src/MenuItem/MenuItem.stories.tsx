import { Meta, StoryObj } from '@storybook/react'
import MenuItem from './MenuItem'

const meta = {
  component: MenuItem,
  title: 'GordoUI/MenuItem',
  tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>
export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    children: 'hola',
    className: 'text-blue-500',
    dense: false,
    disableGutters: false,
    divider: false,
  },
}
