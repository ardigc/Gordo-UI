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
      <div className="flex justify-center">
        <Tooltip title={args.title}>
          <div>hola</div>
        </Tooltip>
      </div>
    </>
  )
}

export const testButton: Story = {
  render: (args) => <TestButtonFunc args={args} />,
  args: {
    children: <div>hola</div>,
    title: 'holiwiii',
  },
}
