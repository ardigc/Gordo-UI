import { MouseEventHandler, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverProps } from './Popover'
import { Button } from '../Button/Button'
import classNames from 'classnames'
const meta = {
  component: Popover,
  title: 'GordoUI/Popover',
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>
export default meta
type Story = StoryObj<typeof meta>

const TestFunc = ({ args }: { args: PopoverProps }) => {
  const [open, setOpen] = useState(args.open)
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  return (
    <>
      <div className="flex justify-center h-56 items-center">
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
          components={args.components}
          disableTransition={args.disableTransition}
        >
          <p
            id="hola"
            className={classNames('font-base text-base font-normal  p-4')}
          >
            The content of the Popover.
          </p>
        </Popover>
      </div>
    </>
  )
}

export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    children: <div></div>,
    open: false,
    anchorOrigin: { vertical: 'top', horizontal: 'left' },
    transformOrigin: { vertical: 'center', horizontal: 'right' },
    anchorReference: 'anchorEl',
    anchorPosition: { top: 300, left: 250 },
    className: '!bg-slate-100',
    // container: 'div',
    elevation: 5,
    disableTransition: true,
    // marginThreshold: 300,
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
      <Button
        onMouseEnter={handleClick}
        onMouseLeave={() => {
          setOpen(false)
        }}
      >
        click aqui
      </Button>
      <Popover
        // onClose={() => setOpen(false)}
        anchorOrigin={args.anchorOrigin}
        transformOrigin={args.transformOrigin}
        anchorReference={args.anchorReference}
        anchorPosition={args.anchorPosition}
        anchorEl={anchorEl}
        open={open}
        componentProps={{ paper: { className: 'hol' } }}
        className={args.className}
        container={args.container}
        elevation={args.elevation}
        marginThreshold={args.marginThreshold}
        disableTransition={args.disableTransition}
        components={args.components}
        classes={args.classes}
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
    children: <div></div>,
    open: false,
    anchorOrigin: { vertical: 'top', horizontal: 'left' },
    transformOrigin: { vertical: 'center', horizontal: 'center' },
    anchorReference: 'anchorEl',
    anchorPosition: { top: 300, left: 250 },
    className: '!bg-slate-100',
    // container: 'div',

    elevation: 5,
    disableTransition: true,
    classes: { root: 'pointer-events-none' },
    marginThreshold: 300,
    components: { root: 'button', paper: 'button' },
  },
}
