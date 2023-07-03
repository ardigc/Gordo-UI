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
      <div className="flex justify-center h-56 items-center">
        <Tooltip
          title={args.title}
          disableTransition={args.disableTransition}
          open={args.open}
          placement={args.placement}
          arrow={args.arrow}
        >
          <div>
            <p>holasdfvadvqasfvasfgvzdfvasdfasdfsdfsdfsdf</p>
            <p>akjaksjasklfj</p>
          </div>
        </Tooltip>
      </div>
    </>
  )
}

export const testButton: Story = {
  render: (args) => <TestButtonFunc args={args} />,
  args: {
    children: (
      <div>
        <p>holasdfvadvqasfvasfgvzdfvasdfasdfsdfsdfsdf</p>
        <p>akjaksjasklfj</p>
      </div>
    ),
    title: 'Deletdhgsgdgdgddgdgdgdgdggde',
    placement: 'right',
    // open: true,
    disableTransition: false,
    arrow: true,
  },
}
const TestButtonFunc2 = ({ args }: { args: TooltipProps }) => {
  return (
    <>
      <div className="flex justify-center h-56 items-center">
        <Tooltip
          title={args.title}
          disableTransition={args.disableTransition}
          open={args.open}
          placement={args.placement}
          arrow={args.arrow}
        >
          <div>
            <p>holasdfvadvqasfvasfgvzdfvasdfasdfsdfsdfsdf</p>
            <p>akjaksjasklfj</p>
          </div>
        </Tooltip>
      </div>
    </>
  )
}

export const testButton2: Story = {
  render: (args) => <TestButtonFunc2 args={args} />,
  args: {
    children: <div>hola</div>,
    title: 'De',
    placement: 'right-end',
    // open: true,
    disableTransition: false,
    arrow: true,
  },
}
const TestButtonFunc3 = ({ args }: { args: TooltipProps }) => {
  return (
    <>
      <div className="flex justify-center h-56 items-center">
        <Tooltip
          title={args.title}
          disableTransition={args.disableTransition}
          open={args.open}
          placement={args.placement}
          arrow={args.arrow}
        >
          <div>
            <p>holasdfvadvqasfvasfgvzdfvasdfasdfsdfsdfsdf</p>
            <p>akjaksjasklfj</p>
          </div>{' '}
        </Tooltip>
      </div>
    </>
  )
}

export const testButton3: Story = {
  render: (args) => <TestButtonFunc3 args={args} />,
  args: {
    children: <div>hola</div>,
    title: 'Deletdhgsgdgdgddgdgdgdgdggde',
    placement: 'right-start',
    // open: true,
    disableTransition: false,
    arrow: true,
  },
}
