import { Meta, StoryObj } from '@storybook/react'
import { Option } from './Option'

const meta = {
  component: Option,
  title: 'GordoUI/Option',
  tags: ['autodocs'],
} satisfies Meta<typeof Option>

export default meta

type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: 'hola',
    value: 'hola',
    className: 'bg-slate-400',
    onClick() {
      console.log('hola')
    },
  },
}
export const secondary: Story = {
  args: {
    children: <div>hola</div>,
    className: 'bg-blue-200',
    value: 'hola',
    onClick() {
      console.log('hola')
    },
  },
}
