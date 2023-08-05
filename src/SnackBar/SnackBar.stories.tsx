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
  return <SnackBar />
}
export const Primary: Story = {
  render: (args) => <PrimaryFunc args={args} />,
  args: {},
}
