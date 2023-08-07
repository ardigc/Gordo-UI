import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  component: Input,
  title: 'GordoUI/Input',
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    id: 'hola',
  },
}
export const secondary: Story = {
  args: {
    id: 'hola',
    color: 'secondary',
    autoFocus: true,
    fullWidth: true,
    type: 'number',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
    endAdornment: (
      <div style={{ background: 'gray', width: '30px', height: '30px' }}></div>
    ),
  },
}
export const startAdronemt: Story = {
  args: {
    id: 'hola',
    color: 'secondary',
    fullWidth: true,
    margin: 'dense',
    disaledUndeline: true,
    startAdornment: (
      <div style={{ background: 'gray', width: '30px', height: '30px' }}></div>
    ),
  },
}
export const component: Story = {
  args: {
    id: 'hola',
    color: 'secondary',
    fullWidth: true,
    margin: 'dense',
    disaledUndeline: true,
    components: { Input: 'div' },
    startAdornment: (
      <div style={{ background: 'gray', width: '30px', height: '30px' }}></div>
    ),
  },
}
