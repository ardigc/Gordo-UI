import { Meta, StoryObj } from '@storybook/react'
import IconButton from './IconButton'
import { StarIcon } from '../components/icons/StarIcon'
const meta = {
  component: IconButton,
  title: 'GordoUI/IconButton',
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>
export default meta
type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: <StarIcon />,
    onClick() {
      console.log('hola')
    },
  },
}
export const disabled: Story = {
  args: {
    children: <StarIcon />,
    disabled: true,
    onClick() {
      console.log('hola')
    },
  },
}
export const edgeEnf: Story = {
  args: {
    children: <StarIcon />,
    disabled: true,
    edge: 'end',
    onClick() {
      console.log('hola')
    },
  },
}
