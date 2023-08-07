import { Meta, StoryObj } from '@storybook/react'
import { MenuList, MenuListProps } from './MenuList'
import { MenuItem } from '../MenuItem/MenuItem'

const meta = {
  component: MenuList,
  title: 'GordoUI/MenuList',
  tags: ['autodocs'],
} satisfies Meta<typeof MenuList>
export default meta
type Story = StoryObj<typeof meta>

const TestButtonFunc = ({ args }: { args: MenuListProps }) => {
  return (
    <>
      <div className="flex bg-slate-100 justify-center h-56 items-center">
        <MenuList {...args}>
          <MenuItem divider>opcion 1</MenuItem>
          <MenuItem>opcion 2</MenuItem>
          <MenuItem>opcion 3</MenuItem>
        </MenuList>
      </div>
    </>
  )
}
export const testButton: Story = {
  render: (args) => <TestButtonFunc args={args} />,
  args: {
    children: <div></div>,
  },
}
