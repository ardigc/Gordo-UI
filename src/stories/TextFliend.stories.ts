import { Meta, StoryObj } from '@storybook/react'
import TextField from './TextField'
const meta = {
  component: TextField,
  title: 'GordoUI/TextField',
  tags: ['autodogs'],
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    label: 'hola',
    classes: {labelClassName:'bg-blue-400'}
  },
}
