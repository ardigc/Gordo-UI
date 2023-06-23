import { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

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
    error: true,
    classes: { constainerClassName: 'bg-slate-500', inputClassName: 'w-72' },
  },
}
export const secundary: Story = {
  args: {
    id: 'hola',
    color: 'secundary',
    autoFocus: true,
    fullWidth: true,
    disaledUndeline: true,
    endAdornment: (
      <div style={{ background: 'gray', width: '30px', height: '30px' }}></div>
    ),
  },
}