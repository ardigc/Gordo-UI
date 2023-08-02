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
import IconButton from '../Button/IconButton'
import { NextPageIcon, PrevPageIcon } from '../components/icons/StarIcon'
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
              // count={-1}
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
interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {'<<'}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {<PrevPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {<NextPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {'>>'}
      </IconButton>
    </div>
  )
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

export function TestFunc2({ args }: { args: TablePaginationProps }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleChangePage = (
    event: React.MouseEvent<Element, MouseEvent> | null | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
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
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              // rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              // SelectProps={{
              //   inputProps: {
              //     'aria-label': 'rows per page',
              //   },
              //   native: true,
              // }}
              onPageChange={handleChangePage}
              // onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
export const test2: Story = {
  render: (args) => <TestFunc2 args={args} />,
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
