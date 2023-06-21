import { Meta, StoryObj } from '@storybook/react'
import Option from './Option'

const meta = {
  component: Option,
  title: 'GordoUI/Option',
  tags: ['autodogs'],
} satisfies Meta<typeof Option>

export default meta

type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: 'hola',
    className: 'bg-slate-400',
    onClick() {
      console.log('hola')
    },
  },
}
export const secundary: Story = {
  args: {
    children: <div>hola</div>,
    className: 'bg-blue-200',
    onClick() {
      console.log('hola')
    },
  },
}
