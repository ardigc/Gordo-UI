import { Meta, StoryObj } from '@storybook/react'
import Menu, { MenuProps } from './Menu'

const meta = {
  component: Menu,
  title: 'GordoUI/Menu',
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>
export default meta
type Story = StoryObj<typeof meta>

const TestButtonFunc = ({ args }: { args: MenuProps }) => {
    return (<>
    <Menu open={args.open}>

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