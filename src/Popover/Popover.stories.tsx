import { useState } from 'react'

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

  return (
    <>
      <Button onClick={() => setOpen(true)}>click aqui</Button>
      <Popover onClose={() => setOpen(false)} open={open} />
    </>
  )
}

export const test: Story = {
  render: () => <PopoverWithButton />,
}
