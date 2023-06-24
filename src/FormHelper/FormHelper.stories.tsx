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
