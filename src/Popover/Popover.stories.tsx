import { MouseEventHandler, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import Popover from './Popover'
import Button from '../Button/Button'
const meta = {
  component: Popover,
  title: 'GordoUI/Popover',
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>
export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    open: true,
    onClose() {
      console.log('cerrando')
    },
  },
}
const PopoverWithButton = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  return (
    <>
      <Button onClick={handleClick}>click aqui</Button>
      <Popover onClose={() => setOpen(false)}  anchorEl={anchorEl} open={open} />
    </>
  )
}

export const popovertop: Story = {
  render: () => <PopoverWithButton />,
}
const PopoverWithButtonBottom = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  return (
    <>
      <Button onClick={handleClick}>click aqui</Button>
      <Popover onClose={() => setOpen(false)} anchorOrigin={{vertical:'bottom', horizontal:'left'}} anchorEl={anchorEl} open={open} />
    </>
  )
}

export const popoverbottom: Story = {
  render: () => <PopoverWithButtonBottom />,


}
const PopoverWithButtonCenter = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  return (
    <>
      <Button onClick={handleClick}>click aqui</Button>
      <Popover onClose={() => setOpen(false)} anchorOrigin={{vertical:'center', horizontal:'left'}} anchorEl={anchorEl} open={open} />
    </>
  )
}

export const popovercenter: Story = {
  render: () => <PopoverWithButtonCenter />,


}
