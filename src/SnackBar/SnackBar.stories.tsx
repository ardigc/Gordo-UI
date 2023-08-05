import { Meta, StoryObj } from '@storybook/react'
import SnackBar, { SnackBarProps } from './SnackBar'

const meta = {
  component: SnackBar,
  title: 'GordoUI/SnackBar',
  tags: ['autodocs'],
} satisfies Meta<typeof SnackBar>

export default meta
type Story = StoryObj<typeof meta>
const PrimaryFunc = ({ args }: { args: SnackBarProps }) => {
  return <SnackBar {...args} />
}
export const Primary: Story = {
  render: (args) => <PrimaryFunc args={args} />,
  args: {
    message: 'Note archived',
  },
}
export const secundary: Story = {
  render: (args) => <PrimaryFunc args={args} />,
  args: {
    // message: 'Note archived',
  },
}
