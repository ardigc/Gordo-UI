import { Meta, StoryObj } from '@storybook/react'
import TextField from './TextField'
const meta = {
  component: TextField,
  title: 'GordoUI/TextField',
  tags: ['autodogs'],
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    label: 'hola',
    classes: {labelClassName:'bg-blue-200', inputClassName:'bg-yellow-200'}
  },
}
export const secondary: Story={
  args:{
    label:'hola ramonchu',
    classes:{inputClassName:'bg-red-500'}
  }
}
export const sinFondo: Story={
  args:{
    label:'sin nada de fondo',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  }
}
