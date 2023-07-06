import { Meta, StoryObj } from '@storybook/react'
import TableRow, { TableRowProps } from './TableRow'
import Button from '../Button/Button'
import { MouseEventHandler, useState } from 'react'
import TableCell from './TableCell'

const meta = {
  component: TableRow,
  title: 'GordoUI/TableRow',
  tags: ['autodocs'],
} satisfies Meta<typeof TableRow>
export default meta
type Story = StoryObj<typeof meta>

const TestFunc = ({ args }: { args: TableRowProps }) => {
    return(
<>
<TableRow {...args}>
    <TableCell> hola</TableCell>
</TableRow>
</>
)
}
export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {

    },
}