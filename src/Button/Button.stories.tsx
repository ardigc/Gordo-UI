import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
const meta = {
  component: Button,
  title: 'GordoUI/Button',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    children: 'holaas',
    onClick() {
      console.log('hola')
    },
  },
}
export const warning: Story = {
  args: {
    children: 'holaas',
    onClick() {
      console.log('hola')
    },
    color: 'warning',
  },
}
export const disabled: Story = {
  args: {
    children: 'holaas',
    onClick() {
      console.log('hola')
    },
    color: 'warning',
    disabled: true,
  },
}
export const Link: Story = {
  args: {
    children: 'link',
    onClick() {
      console.log('hola')
    },
    href: 'https://www.google.com',
  },
}
export const contained: Story = {
  args: {
    children: 'contained',
    onClick() {
      console.log('hola')
    },
    variant: 'contained',
  },
}
export const containedShadow: Story = {
  args: {
    children: 'contained',
    onClick() {
      console.log('hola')
    },
    variant: 'contained',
    disableElevation: true,
  },
}
export const disableRipple: Story = {
  args: {
    children: 'contained',
    onClick() {
      console.log('hola')
    },
    variant: 'contained',
    disableRipple:true,
    disableElevation: true,
  },
}
