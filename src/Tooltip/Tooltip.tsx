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
  open?: boolean
}
export default function Tooltip({
  children,
  title,
  placement,
  open,
}: TooltipProps) {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const [opened, setOpen] = useState(open ? open : false)
  // console.log(opened)
  const onMouseEnterHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  const OnMouseLeaveHandler: MouseEventHandler<HTMLDivElement> = () => {
    if (!open) {
      setOpen(false)
    }
  }
  const anchorOrigin = (): {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  } => {
    if (placement === 'bottom-end') {
      return { vertical: 'bottom', horizontal: 'right' }
    } else if (placement === 'bottom-start') {
      return { vertical: 'bottom', horizontal: 'left' }
    } else if (placement === 'bottom') {
      return { vertical: 'bottom', horizontal: 'center' }
    } else if (placement === 'left') {
      return { vertical: 'center', horizontal: 'left' }
    } else if (placement === 'left-end') {
      return { vertical: 'bottom', horizontal: 'left' }
    } else if (placement === 'left-start') {
      return { vertical: 'top', horizontal: 'left' }
    } else if (placement === 'right') {
      return { vertical: 'center', horizontal: 'right' }
    } else if (placement === 'right-end') {
      return { vertical: 'bottom', horizontal: 'right' }
    } else if (placement === 'right-start') {
      return { vertical: 'top', horizontal: 'right' }
    } else if (placement === 'top') {
      return { vertical: 'top', horizontal: 'center' }
    } else if (placement === 'top-end') {
      return { vertical: 'top', horizontal: 'right' }
    } else if (placement === 'top-start') {
      return { vertical: 'top', horizontal: 'left' }
    } else {
      return { vertical: 'bottom', horizontal: 'center' }
    }
  }
  const transformOrigin = (): {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  } => {
    if (placement === 'bottom-end') {
      return { vertical: 'top', horizontal: 'center' }
    } else if (placement === 'bottom-start') {
      return { vertical: 'top', horizontal: 'center' }
    } else if (placement === 'bottom') {
      return { vertical: 'top', horizontal: 'center' }
    } else if (placement === 'left') {
      return { vertical: 'center', horizontal: 'right' }
    } else if (placement === 'left-end') {
      return { vertical: 'center', horizontal: 'right' }
    } else if (placement === 'left-start') {
      return { vertical: 'center', horizontal: 'right' }
    } else if (placement === 'right') {
      return { vertical: 'center', horizontal: 'left' }
    } else if (placement === 'right-end') {
      return { vertical: 'center', horizontal: 'left' }
    } else if (placement === 'right-start') {
      return { vertical: 'center', horizontal: 'left' }
    } else if (placement === 'top') {
      return { vertical: 'bottom', horizontal: 'center' }
    } else if (placement === 'top-end') {
      return { vertical: 'bottom', horizontal: 'center' }
    } else if (placement === 'top-start') {
      return { vertical: 'bottom', horizontal: 'center' }
    } else {
      return { vertical: 'top', horizontal: 'center' }
    }
  }
  return (
    <div className="inline-flex">
      <Popover
        open={opened}
        anchorOrigin={{
          vertical: anchorOrigin().vertical,
          horizontal: anchorOrigin().horizontal,
        }}
        transformOrigin={{
          vertical: transformOrigin().vertical,
          horizontal: transformOrigin().horizontal,
        }}
        anchorEl={anchorEl}
        elevation={0}
        // className='bg-transparent'
        classes={{ root: 'pointer-events-none' }}
      >
        <div
          className={classNames(
            'bg-neutral-500 rounded text-white px-2 py-1 font-medium text-xs font-base ',
            {
              'mt-[14px] ':
                placement === 'bottom' ||
                placement === 'bottom-start' ||
                placement === 'bottom-end',
            }
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
