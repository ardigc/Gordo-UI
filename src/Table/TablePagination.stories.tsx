import { Meta, StoryObj } from '@storybook/react'
import Table from './Table'
import TableCell from './TableCell'
import TableRow from './TableRow'
import TableBody from './TableBody'
import TablePagination, { TablePaginationProps } from './TablePagination'
import Paper from '../Paper/Paper'
import { useState } from 'react'
import TableContainer from './TableContainer'
import TableFooter from './TableFooter'
const meta = {
  component: TablePagination,
  title: 'GordoUI/TablePagination',
  tags: ['autodocs'],
} satisfies Meta<typeof TablePagination>
export default meta
type Story = StoryObj<typeof meta>
const TestFunc = ({ args }: { args: TablePaginationProps }) => {
  const [page, setPage] = useState(args.page)
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage)

  const handleChangePage = (
    event: React.MouseEvent<Element, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }
  function createData(name: string, calories: number, fat: number) {
    return { name, calories, fat }
  }

  const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1))
  return (
    // <div className="h-48 overflow-auto">
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    count: 30,
    page: 0,
    rowsPerPage: 4,
    // children: <div></div>,

    // className: 'bg-gray-200 ',
    // padding: 'normal',
    // size: 'medium',
    // stickyHeader: true,
  },
}
