import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
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
    fullWidth: true,
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
    disableRipple: true,
    disableElevation: true,
  },
}
export const startIcon: Story = {
  args: {
    children: 'contained',
    onClick() {
      console.log('hola')
    },
    variant: 'contained',
    startIcon: <div className="w-2 h-2 bg-slate-300"></div>,
  },
}
export const endIcon: Story = {
  args: {
    children: 'contained',
    onClick() {
      console.log('hola')
    },
    className: 'h-96',
    variant: 'contained',
    endIcon: <div className="w-2 h-2 bg-slate-300"></div>,
  },
}
export const classes: Story = {
  args: {
    children: 'contained',
    onClick() {
      console.log('hola')
    },
    className: 'h-96',
    classes: {
      buttonClassName: 'bg-slate-100',
      rippleSpanClassName: 'bg-red-500',
    },
    variant: 'contained',
    endIcon: <div className="w-2 h-2 bg-slate-300"></div>,
  },
}
export const divComponent: Story = {
  args: {
    children: 'contained',
    onClick() {
      console.log('hola')
    },
    className: 'h-96',
    classes: {
      buttonClassName: 'bg-slate-100',
      rippleSpanClassName: 'bg-red-500',
    },
    variant: 'contained',
    endIcon: <div className="w-2 h-2 bg-slate-300"></div>,
    component: 'div',
  },
}
