import { Meta, StoryObj } from '@storybook/react'
import TableCell from './TableCell'
import Button from '../Button/Button'
import { MouseEventHandler, useState } from 'react'

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
    padding: 'checkbox',
  },
}
