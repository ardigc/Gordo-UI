import { Meta, StoryObj } from '@storybook/react'
import Menu, { MenuProps } from './Menu'
import MenuItem from '../MenuItem/MenuItem'
import Button from '../Button/Button'
import { MouseEventHandler, useState } from 'react'

const meta = {
  component: Menu,
  title: 'GordoUI/Menu',
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>
export default meta
type Story = StoryObj<typeof meta>

const TestButtonFunc = ({ args }: { args: MenuProps }) => {
  const [open, setOpen]=useState(args.open)
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)

  const clickHandler: MouseEventHandler<HTMLButtonElement>=(ev)=>{
    setAnchorEl(ev.currentTarget)
setOpen(true)
  }
  const onCloseHandler=()=>{
    console.log('close')
    setOpen(false)
  }
    return (<>
    <div className="flex justify-center h-56 items-center">

    <Button onClick={clickHandler}>hola</Button>
    <Menu open={open} onClose={onCloseHandler} classes={args.classes} anchorEl={anchorEl}>
    <MenuItem divider onClick={onCloseHandler}>opcion 1</MenuItem>
    <MenuItem onClick={onCloseHandler}>opcion 2</MenuItem>
    <MenuItem onClick={onCloseHandler}>opcion 3</MenuItem>
    </Menu>
    </div>
    </>)
}
export const testButton: Story = {
    render: (args) => <TestButtonFunc args={args} />,
    args: {
      children:<div></div>,
      open:false,
      classes:{Popover:'hover:bg-gray-600'}
    }
}