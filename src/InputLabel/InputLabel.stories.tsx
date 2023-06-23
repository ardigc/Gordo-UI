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
    children: 'holaasdasdasd asd asd asd asd asd as',
    className: 'bg-slate-100',
    disableAnimation: false,
    shrink: true,
  },
}
