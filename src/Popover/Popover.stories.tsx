import { MouseEventHandler, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import Popover, { PopoverProps } from './Popover'
import Button from '../Button/Button'
import classNames from 'classnames'
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
      <Popover onClose={() => setOpen(false)} anchorEl={anchorEl} open={open} />
    </>
  )
}

export const popovertop: Story = {
  render: () => <PopoverWithButton />,
  args: {
    open: false,
  },
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
      <Popover
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        anchorEl={anchorEl}
        open={open}
      />
    </>
  )
}

export const popoverbottom: Story = {
  render: () => <PopoverWithButtonBottom />,
  args: {
    open: false,
  },
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
      <Popover
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        anchorEl={anchorEl}
        open={open}
      />
    </>
  )
}

export const popovercenter: Story = {
  render: () => <PopoverWithButtonCenter />,
  args: {
    open: false,
  },
}
const TestFunc = ({ args }: { args: PopoverProps }) => {
  const [open, setOpen] = useState(args.open)
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  return (
    <>
      <Button onClick={handleClick}>click aqui</Button>
      <Popover
        onClose={() => setOpen(false)}
        anchorOrigin={args.anchorOrigin}
        transformOrigin={args.transformOrigin}
        anchorReference={args.anchorReference}
        anchorPosition={args.anchorPosition}
        anchorEl={anchorEl}
        open={open}
        className={args.className}
        container={args.container}
        elevation={args.elevation}
        marginThreshold={args.marginThreshold}
        slots={args.slots}
        disableTransition={args.disableTransition}
      >
        <p className={classNames('font-base text-base font-normal  p-4')}>
          The content of the Popover.
        </p>
      </Popover>
    </>
  )
}

export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    open: false,
    anchorOrigin: { vertical: 'top', horizontal: 'left' },
    transformOrigin: { vertical: 'center', horizontal: 'center' },
    anchorReference: 'anchorEl',
    anchorPosition: { top: 300, left: 250 },
    className: '!bg-slate-100',
    // container: 'div',
    elevation: 5,
    marginThreshold: 300,
  },
}
const TestButtonFunc = ({ args }: { args: PopoverProps }) => {
  const [open, setOpen] = useState(args.open)
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  return (
    <>
      <Button onClick={handleClick}>click aqui</Button>
      <Popover
        onClose={() => setOpen(false)}
        anchorOrigin={args.anchorOrigin}
        transformOrigin={args.transformOrigin}
        anchorReference={args.anchorReference}
        anchorPosition={args.anchorPosition}
        anchorEl={anchorEl}
        open={open}
        className={args.className}
        container={args.container}
        elevation={args.elevation}
        marginThreshold={args.marginThreshold}
        disableTransition={args.disableTransition}
        slots={args.slots}
      >
        <p className={classNames('font-base text-base font-normal  p-4')}>
          The content of the Popover.
        </p>
      </Popover>
    </>
  )
}

export const testButton: Story = {
  render: (args) => <TestButtonFunc args={args} />,
  args: {
    open: false,
    anchorOrigin: { vertical: 'top', horizontal: 'left' },
    transformOrigin: { vertical: 'center', horizontal: 'center' },
    anchorReference: 'anchorEl',
    anchorPosition: { top: 300, left: 250 },
    className: '!bg-slate-100',
    // container: 'div',
    elevation: 5,
    disableTransition: true,
    marginThreshold: 300,
    slots: { root: 'button', paper: 'button' },
  },
}
