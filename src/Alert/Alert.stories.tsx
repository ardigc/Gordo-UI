import { Meta, StoryObj } from '@storybook/react'
import Alert, { AlertProps } from './Alert'
import Button from '../Button/Button'
import {
  ArrowDownIcon,
  StarIcon,
  StarIconFilled,
} from '../components/icons/Icons'
import AlertTitle from './AlertTitle'

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
    onClose: undefined,
  },
}
export const warning: Story = {
  args: {
    children: 'Ojo cuidao',
    severity: 'warning',
    onClose: undefined,
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
export const onClose: Story = {
  args: {
    children: 'Esto es informacion',
    severity: 'warning',
    onClose: () => {},
  },
}
export const outlined: Story = {
  args: {
    children: 'Esto es informacion',
    severity: 'warning',
    onClose: () => {},
    variant: 'outlined',
  },
}
export const filled: Story = {
  args: {
    children: 'Esto es informacion',
    severity: 'success',
    onClose: () => {},
    variant: 'filled',
    closeText: 'aksddakd',
    icon: <div>iconoWapo</div>,
  },
}
export const iconMapping: Story = {
  args: {
    children: 'Esto es informacion',
    severity: 'success',
    onClose: () => {},
    variant: 'filled',
    closeText: 'aksddakd',
    iconMapping: { success: <ArrowDownIcon />, info: <StarIconFilled /> },
  },
}
export const render: Story = {
  args: {
    children: 'Esto es informacion',
    severity: 'success',
    onClose: () => {},
    variant: 'filled',
    closeText: 'aksddakd',
    iconMapping: { success: <ArrowDownIcon />, info: <StarIconFilled /> },
    slots: { closeButton: 'div', closeIcon: StarIcon },
    slotProps: { closeButton: { className: 'bg-slate-200' } },
  },
}
const TestFunc = ({ args }: { args: AlertProps }) => {
  return (
    <Alert {...args}>
      <AlertTitle>titulo</AlertTitle>
      lo de abajo
    </Alert>
  )
}
export const alertTitle: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    severity: 'info',
    onClose: undefined,
  },
}
