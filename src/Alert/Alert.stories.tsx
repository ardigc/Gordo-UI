import { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'
import Button from '../Button/Button'

const meta = {
  component: Alert,
  title: 'GordoUI/Alert',
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>
export const success: Story = {
  args: {
    children: 'Todo va feten',
    severity: 'success',
  },
}
export const warning: Story = {
  args: {
    children: 'Ojo cuidao',
    severity: 'warning',
  },
}

export const error: Story = {
  args: {
    children: 'Menudo fallo',
    severity: 'error',
  },
}
export const info: Story = {
  args: {
    children: 'Esto es informacion',
    severity: 'info',
  },
}
export const action: Story = {
  args: {
    children: 'Esto es informacion',
    severity: 'info',
    action: <Button size="small">UNDO</Button>,
  },
}