import { Meta, StoryObj } from '@storybook/react'
import Paper from './Paper'

const meta = {
  component: Paper,
  title: 'GordoUI/Paper',
  tags: ['autodocs'],
} satisfies Meta<typeof Paper>
export default meta
type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: <div>hola</div>,
    square: false,
  },
}
