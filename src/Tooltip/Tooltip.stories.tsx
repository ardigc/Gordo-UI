import { Meta, StoryObj } from '@storybook/react'
import Tooltip, { TooltipProps } from './Tooltip'

const meta = {
  component: Tooltip,
  title: 'GordoUI/Tooltip',
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>
export default meta
type Story = StoryObj<typeof meta>

const TestButtonFunc = ({ args }: { args: TooltipProps }) => {
  return (
    <>
      <Tooltip>
        <div className="mt-32 ml-32">hola</div>
      </Tooltip>
    </>
  )
}

export const testButton: Story = {
  render: (args) => <TestButtonFunc args={args} />,
  args: {
    children: <div>hola</div>,
  },
}
