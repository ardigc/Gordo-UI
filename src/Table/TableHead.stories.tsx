import { Meta, StoryObj } from '@storybook/react'
import TableHead, { TableHeadProps } from './TableHead'
import TableCell from './TableCell'
import TableRow from './TableRow'

const meta = {
  component: TableHead,
  title: 'GordoUI/TableHead',
  tags: ['autodocs'],
} satisfies Meta<typeof TableHead>
export default meta
type Story = StoryObj<typeof meta>

const TestFunc = ({ args }: { args: TableHeadProps }) => {
  return (
    <>
      <TableHead {...args}>
        <TableRow>
          <TableCell> hola</TableCell>
          <TableCell> hola</TableCell>
          <TableCell> hola</TableCell>
        </TableRow>
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
      </TableHead>
    </>
  )
}
export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    className: 'rounded ',
  },
}
