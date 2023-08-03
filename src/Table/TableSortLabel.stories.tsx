import { Meta, StoryObj } from '@storybook/react'
import Table from './Table'
import TableCell from './TableCell'
import TableRow from './TableRow'
import TableBody from './TableBody'
import TableSortLabel, { TableSortLabelProps } from './TableSortLabel'
import Paper from '../Paper/Paper'
import { useState } from 'react'
import TableContainer from './TableContainer'
import TableFooter from './TableFooter'
import IconButton from '../Button/IconButton'
import { NextPageIcon, PrevPageIcon } from '../components/icons/Icons'
import TableHead from './TableHead'
import TablePagination from './TablePagination'
const meta = {
  component: TableSortLabel,
  title: 'GordoUI/TableSortLabel',
  tags: ['autodocs'],
} satisfies Meta<typeof TableSortLabel>
export default meta
type Story = StoryObj<typeof meta>

const TestFunc = ({ args }: { args: TableSortLabelProps }) => {
  interface Data {
    calories: number
    carbs: number
    fat: number
    name: string
    protein: number
  }
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ): Data {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    }
  }
  const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
  ]
  interface HeadCell {
    disablePadding: boolean
    id: keyof Data
    label: string
    numeric: boolean
  }

  const headCells: readonly HeadCell[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)',
    },
    {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Calories',
    },
    {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Fat (g)',
    },
    {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'Carbs (g)',
    },
    {
      id: 'protein',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)',
    },
  ]
  return (
    <Paper>
      <TableContainer>
        <Table aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={'left'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  // sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                  //   active={orderBy === headCell.id}
                  //   direction={orderBy === headCell.id ? order : 'asc'}
                  //   onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`

              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        onPageChange={() => console.log('hola')}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={5}
        page={0}
      />
    </Paper>
  )
}
export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    children: <div></div>,
  },
}
