import { Meta, StoryObj } from '@storybook/react'
import SnackBar, { SnackBarProps } from './SnackBar'
import { useState } from 'react'
import Button from '../Button/Button'
import { XIcon } from '../components/icons/Icons'
import Alert from '../Alert/Alert'

const meta = {
  component: SnackBar,
  title: 'GordoUI/SnackBar',
  tags: ['autodocs'],
} satisfies Meta<typeof SnackBar>

export default meta
type Story = StoryObj<typeof meta>
const PrimaryFunc = ({ args }: { args: SnackBarProps }) => {
  const [open, setOpen] = useState(false)
  const handleClose = (_event: React.SyntheticEvent | Event|null, reason?: string) => {
  
console.log(reason)
// if (reason === 'clickAway') {
//   return;
// }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Hazme click</Button>
      <SnackBar open={open} {...args} onClose={handleClose}/>
    </>
  )
}
export const Primary: Story = {
  render: (args) => <PrimaryFunc args={args} />,
  args: {
    message: 'Has hecho click',
  },
}
export const secundary: Story = {
  render: (args) => <PrimaryFunc args={args} />,
  args: {
    // message: 'Note archived',
  },
}
export const action: Story = {
  render: (args) => <PrimaryFunc args={args} />,
  args: {
  action:<Button><XIcon/></Button>,
    message: 'Note archived',
  },
}
export const autoHide: Story = {
  render: (args) => <PrimaryFunc args={args} />,
  args: {
  action:<Button><XIcon/></Button>,
    message: 'Note archived',
    autoHideDuration:600
  },
}
const ChildrenFunc = ({ args }: { args: SnackBarProps }) => {
  const [open, setOpen] = useState(false)
  const handleClose = (_event: React.SyntheticEvent | Event|null, reason?: string) => {
  
console.log(reason)
// if (reason === 'clickAway') {
//   return;
// }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Hazme click</Button>
      <SnackBar open={open} {...args} onClose={handleClose}><Alert onClose={handleClose}>ESto es una prueba</Alert></SnackBar>
    </>
  )
}
export const children: Story = {
  render: (args) => <ChildrenFunc args={args} />,
  args: {
  action:<Button><XIcon/></Button>,
    message: 'Note archived',
    autoHideDuration:6000
  },
}
