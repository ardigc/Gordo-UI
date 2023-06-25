import { Meta, StoryObj } from '@storybook/react'
import FormControl from './FormControl'
import Input from '../Input/Input'
const meta = {
  component: FormControl,
  title: 'GordoUI/FormControl',
  tags: ['autodocs'],
} satisfies Meta<typeof FormControl>
export default meta
type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: (
      <>
        <Input name="hola" /> <button type="submit">button</button>
      </>
    ),
    onSubmit(ev) {
      ev.preventDefault
      console.log(ev.currentTarget)
    },
  },
}
