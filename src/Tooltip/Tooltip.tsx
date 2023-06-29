import {
  // JSXElementConstructor,
  MouseEventHandler,
  // ReactElement,
  ReactNode,
  useState,
} from 'react'
import Popover from '../Popover/Popover'
import classNames from 'classnames'
export interface TooltipProps {
  children: ReactNode
  title?: ReactNode
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
}
export default function Tooltip({ children, title, placement }: TooltipProps) {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const [open, setOpen] = useState(false)
  const onMouseEnterHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  const OnMouseLeaveHandler: MouseEventHandler<HTMLDivElement> = (): {
    vertical: 'bottom'
    horizontal: 'center'
  } => {
    console.log('hola')
    setOpen(false)
  }
  const anchorOrigin: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  } = () => {
    if (placement === 'bottom-end') {
      return { vertical: 'bottom', horizontal: 'center' }
    } else if (placement === 'bottom-start') {
      return { vertical: 'bottom', horizontal: 'left' }
    } else {
      return { vertical: 'bottom', horizontal: 'center' }
    }
  }
  return (
    <div className="inline-flex">
      <Popover
        open={open}
        anchorOrigin={anchorOrigin}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        anchorEl={anchorEl}
        elevation={0}
        // className='bg-transparent'
        classes={{ root: 'pointer-events-none' }}
      >
        <div
          className={classNames(
            'bg-neutral-500 rounded text-white px-2 py-1 font-medium text-xs font-base ',
            { 'mt-[14px] ': true }
          )}
        >
          {title}
        </div>
      </Popover>
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={OnMouseLeaveHandler}
        // className={classNames('bg-gray-800 text-white')}
      >
        {children}
      </div>
    </div>
  )
}
