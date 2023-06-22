import { Meta, StoryObj } from '@storybook/react'
import Input from './input'

const meta = {
  component: Input,
  title: 'GordoUI/Input',
  tags: ['autodogs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    id: 'hola',
  },
}
