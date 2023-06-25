import { Meta, StoryObj } from '@storybook/react'
import FormControl from './FormControl'
import Input from '../Input/Input'
import InputLabel from '../InputLabel/InputLabel'
import FormHelper from '../FormHelper/FormHelper'
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
        <InputLabel>hola</InputLabel>
        <Input name="email" /> <button type="submit">button</button>
      </>
    ),
    onSubmit(ev) {
      ev.preventDefault()
      const formData = new FormData(ev.currentTarget)
      console.log(formData.get('email'))
    },
  },
}
export const filled: Story = {
  args: {
    children: (
      <>
        <InputLabel>hola</InputLabel>
        <Input name="email" />
        <FormHelper>helper text</FormHelper>
         <button type="submit">button</button>
      </>
    ),
    color:'error',
    onSubmit(ev) {
      ev.preventDefault()
      const formData = new FormData(ev.currentTarget)
      console.log(formData.get('email'))
    },
    variant: 'filled',
  },
}
export const className: Story = {
  args: {
    children: (
      <>
        <InputLabel>hola</InputLabel>
        <Input name="email" /> <button type="submit">button</button>
      </>
    ),
    className:'bg-red-300 bg-opacity-1',
    onSubmit(ev) {
      ev.preventDefault()
      const formData = new FormData(ev.currentTarget)
      console.log(formData.get('email'))
    },
    variant: 'filled',
  },
}
