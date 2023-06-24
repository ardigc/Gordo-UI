import { Meta, StoryObj } from '@storybook/react'
import FormHelper from './FormHelper'
const meta = {
  component: FormHelper,
  title: 'GordoUI/FormHelper',
  tags: ['autodocs'],
} satisfies Meta<typeof FormHelper>
export default meta

type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: 'holaasdasdasd asd asd asd asd asd as',
  },
}
export const disabled: Story = {
  args: {
    children: 'holaasdasdasd asd asd asd asd asd as',
    disabled: true,
  },
}
export const component: Story = {
  args: {
    component: 'div',
    componentProps: { className: 'w-3 h-3 bg-slate-300' },
  },
}
