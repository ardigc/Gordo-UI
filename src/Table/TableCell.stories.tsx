import { Meta, StoryObj } from '@storybook/react'
import { TableCell } from './TableCell'

const meta = {
  component: TableCell,
  title: 'GordoUI/TableCell',
  tags: ['autodocs'],
} satisfies Meta<typeof TableCell>
export default meta
type Story = StoryObj<typeof meta>
export const primary: Story = {
  args: {
    children: 'hola',
    className: 'bg-slate-400',
    align: 'center',
    padding: 'normal',
    size: 'medium',
    variant: 'head',
  },
}
