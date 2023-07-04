import { Meta, StoryObj } from '@storybook/react'
import Menu, { MenuProps } from './Menu'
import MenuItem from '../MenuItem/MenuItem'
import Button from '../Button/Button'
import { useState } from 'react'

const meta = {
  component: Menu,
  title: 'GordoUI/Menu',
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>
export default meta
type Story = StoryObj<typeof meta>

const TestButtonFunc = ({ args }: { args: MenuProps }) => {
  const [open, setOpen]=useState(args.open)
  const clickhandler=()=>{
setOpen(true)
  }
    return (<>
    <Button onClick={clickhandler}>hola</Button>
    <Menu open={open}>
<MenuItem>opcion 1</MenuItem>
<MenuItem>opcion 2</MenuItem>
<MenuItem>opcion 3</MenuItem>
    </Menu>
    </>)
}
export const testButton: Story = {
    render: (args) => <TestButtonFunc args={args} />,
    args: {
      children:<div></div>,
      open:false,
    }
}