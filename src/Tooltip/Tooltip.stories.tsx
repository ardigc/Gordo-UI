import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from './Tooltip'

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
          followCursor={args.followCursor}
          classes={args.classes}
          components={args.components}
          disableFocusListener={args.disableFocusListener}
          disableHoverListener={args.disableHoverListener}
          disableTouchListener={args.disableTouchListener}
          enterDelay={args.enterDelay}
          enterNextDelay={args.enterNextDelay}
          id={args.id}
          leaveDelay={args.leaveDelay}
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
    placement: 'left',
    // open: true,
    disableTransition: false,
    arrow: true,
    followCursor: false,
    classes: {},
    components: {},
    disableFocusListener: false,
    disableHoverListener: false,
    disableTouchListener: false,
    enterDelay: 100,
    enterNextDelay: 0,
    id: 'hola',
    leaveDelay: 0,
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
          followCursor={args.followCursor}
          classes={args.classes}
          components={args.components}
          disableFocusListener={args.disableFocusListener}
          disableHoverListener={args.disableHoverListener}
          disableTouchListener={args.disableTouchListener}
          enterDelay={args.enterDelay}
          enterNextDelay={args.enterNextDelay}
          id={args.id}
          leaveDelay={args.leaveDelay}
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
    placement: 'left-end',
    // open: true,
    disableTransition: false,
    arrow: true,
    followCursor: false,
    disableFocusListener: false,
    disableHoverListener: false,
    disableTouchListener: false,
    enterDelay: 100,
    enterNextDelay: 0,
    classes: {},
    components: {},
    id: 'hola',
    leaveDelay: 0,
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
          followCursor={args.followCursor}
          classes={args.classes}
          components={args.components}
          disableFocusListener={args.disableFocusListener}
          disableHoverListener={args.disableHoverListener}
          disableTouchListener={args.disableTouchListener}
          enterDelay={args.enterDelay}
          enterNextDelay={args.enterNextDelay}
          id={args.id}
          leaveDelay={args.leaveDelay}
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
    title: (
      <div>
        <p>'Deletdhgsgdgdgddgdgdgdgdggde'</p>
        <p>adfjkaklfkalfkafkl</p>
        <p>akldfalkfalskfalsfkaslfk</p>
        <p>akldfalkfalskfalsfkaslfk</p>
        <p>akldfalkfalskfalsfkaslfk</p>
        <p>akldfalkfalskfalsfkaslfk</p>
      </div>
    ),
    placement: 'top-start',
    open: false,
    disableTransition: false,
    arrow: true,
    followCursor: false,
    classes: {
      tooltip: 'bg-yellow-500 text-black',
      arrow: 'border-yellow-500',
    },
    components: {},
    disableFocusListener: false,
    disableHoverListener: false,
    disableTouchListener: false,
    enterDelay: 100,
    enterNextDelay: 0,
    id: 'hola',
    leaveDelay: 0,
  },
}
