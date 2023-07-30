import { Meta, StoryObj } from '@storybook/react'
import Table from '../Table/Table'
import TableCell from '../Table/TableCell'
import TableRow from '../Table/TableRow'
import TableHead from '../Table/TableHead'
import Collapse, { CollapseProps } from './Collapse'
import TableBody from '../Table/TableBody'

const meta = {
  component: Collapse,
  title: 'GordoUI/Collapse',
  tags: ['autodocs'],
} satisfies Meta<typeof Collapse>
export default meta
type Story = StoryObj<typeof meta>

const TestFunc = ({ args }: { args: CollapseProps }) => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <>
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>

              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
              {' '}
              <TableCell className="!p-0" colSpan={5}>
                <Collapse {...args}>
                  <div>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                    <p>gola</p>
                  </div>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  )
}
export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    children: <div></div>,
    className: 'rounded',
    collapsedSize: '0px',
    easing: 'ease-in',
    timeout: 0,
  },
}
