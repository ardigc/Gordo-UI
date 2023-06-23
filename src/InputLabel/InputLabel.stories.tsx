import { Meta, StoryObj } from '@storybook/react'
import InputLabel from './InputLabel'
const meta = {
  component: InputLabel,
  title: 'GordoUI/InputLabel',
  tags: ['autodocs'],
} satisfies Meta<typeof InputLabel>
export default meta

type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: 'hola',
    className: 'bg-slate-100',
  },
}
