import { Meta, StoryObj } from '@storybook/react'
import Table, { TableProps } from './Table'
import TableCell from './TableCell'
import TableRow from './TableRow'
import TableHead from './TableHead'
import TableBody from './TableBody'

const meta = {
  component: Table,
  title: 'GordoUI/Table',
  tags: ['autodocs'],
} satisfies Meta<typeof Table>
export default meta
type Story = StoryObj<typeof meta>

const TestFunc = ({ args }: { args: TableProps }) => {
  return (
    <>
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableCell> hola</TableCell>
            <TableCell> hola</TableCell>
            <TableCell> hola</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell> hola</TableCell>
            <TableCell variant="body"> hola</TableCell>
            <TableCell> hola</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> hola</TableCell>
            <TableCell variant="footer"> hola</TableCell>
            <TableCell> hola</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    children: <div></div>,
    className: 'rounded ',
    padding: 'normal',
  },
}
