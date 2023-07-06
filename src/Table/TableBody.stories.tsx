import { Meta, StoryObj } from '@storybook/react'
import TableBody, { TableBodyProps } from './TableBody'
import TableCell from './TableCell'
import TableRow from './TableRow'

const meta = {
  component: TableBody,
  title: 'GordoUI/TableBody',
  tags: ['autodocs'],
} satisfies Meta<typeof TableBody>
export default meta
type Story = StoryObj<typeof meta>

const TestFunc = ({ args }: { args: TableBodyProps }) => {
  return (
    <>
      <TableBody {...args}>
        <TableRow>
          <TableCell> hola</TableCell>
          <TableCell> hola</TableCell>
          <TableCell> hola</TableCell>
        </TableRow>
        <TableRow>
          <TableCell> hola</TableCell>
          <TableCell> hola</TableCell>
          <TableCell> hola</TableCell>
        </TableRow>
        <TableRow>
          <TableCell> hola</TableCell>
          <TableCell> hola</TableCell>
          <TableCell> hola</TableCell>
        </TableRow>
      </TableBody>
    </>
  )
}
export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    className: 'rounded ',
  },
}
