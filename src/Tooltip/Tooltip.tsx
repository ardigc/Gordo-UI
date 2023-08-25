import {
  ElementType,
  FocusEvent,
  FocusEventHandler,
  MouseEvent,
  // JSXElementConstructor,
  MouseEventHandler,
  // ReactElement,
  ReactNode,
  TouchEvent,
  TouchEventHandler,
  createContext,
  useRef,
  useState,
} from 'react'
import { Popover, PopoverProps } from '../Popover/Popover'
import classNames from 'classnames'
export const TooltipContext = createContext<{
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
  mouseMove?: { x: number; y: number }
}>({})
export interface TooltipProps
  extends Omit<
    PopoverProps,
    'open' | 'onClose' | 'components' | 'classes' | 'title'
  > {
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
  disableTransition?: boolean
  arrow?: boolean
  followCursor?: boolean
  classes?: {
    arrow?: string
    tooltip?: string
    popover?: string
  }
  components?: {
    Arrow?: ElementType
    Popper?: ElementType
    Tooltip?: ElementType
  }
  componentsProps?: {
    arrow?: object
    popper?: object
    tooltip?: object
  }
  disableFocusListener?: boolean
  disableHoverListener?: boolean
  disableTouchListener?: boolean
  enterDelay?: number
  enterNextDelay?: number
  enterTouchDelay?: number
  id?: string
  leaveDelay?: number
  onClose?: (
    ev: FocusEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>
  ) => void
  onOpen?: (
    ev:
      | FocusEvent<HTMLDivElement>
      | MouseEvent<HTMLDivElement>
      | TouchEvent<HTMLDivElement>
  ) => void
  className?: string
}
export function Tooltip({
  children,
  title,
  placement,
  open,
  disableTransition,
  arrow,
  followCursor,
  classes,
  components,
  componentsProps,
  disableFocusListener,
  disableHoverListener,
  disableTouchListener,
  enterDelay = 100,
  enterNextDelay = 0,
  enterTouchDelay = 700,
  id,
  leaveDelay = 0,
  onClose,
  onOpen,
  className,
  ...rest
}: TooltipProps) {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const popoverRef = useRef<HTMLDivElement>(null)
  const timeOutRef = useRef<NodeJS.Timeout | null>(null)
  const nextTimeOutRef = useRef<NodeJS.Timeout | null>(null)
  const [opened, setOpen] = useState(open ? open : false)
  const [mouseMove, setMouseMove] = useState<{ x: number; y: number }>()
  const ArrowComponent = components?.Arrow ? components.Arrow : 'span'
  const PopperComponent = components?.Popper ? components.Popper : Popover
  const TooltipComponent = components?.Tooltip ? components.Tooltip : 'div'
  const onMouseEnterHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    if (disableHoverListener) return
    if (!followCursor) {
      setAnchorEl(ev.currentTarget)
    }
    timeOutRef.current = setTimeout(() => {
      if (!nextTimeOutRef.current) {
        setOpen(true)
        nextTimeOutRef.current = setTimeout(() => {
          nextTimeOutRef.current = null
        }, enterNextDelay)
      }
    }, enterDelay)
    if (onOpen) {
      onOpen(ev)
    }
  }
  const onFocusHandler: FocusEventHandler<HTMLDivElement> = (ev) => {
    if (disableFocusListener) return
    if (!followCursor) {
      setAnchorEl(ev.currentTarget)
    }
    timeOutRef.current = setTimeout(() => {
      if (!nextTimeOutRef.current) {
        setOpen(true)
        nextTimeOutRef.current = setTimeout(() => {
          nextTimeOutRef.current = null
        }, enterNextDelay)
      }
    }, enterDelay)
    if (onOpen) {
      onOpen(ev)
    }
  }
  const onTouchHandler: TouchEventHandler<HTMLDivElement> = (ev) => {
    if (disableTouchListener) return
    if (!followCursor) {
      setAnchorEl(ev.currentTarget)
    }
    timeOutRef.current = setTimeout(() => {
      if (!nextTimeOutRef.current) {
        setOpen(true)
        nextTimeOutRef.current = setTimeout(() => {
          nextTimeOutRef.current = null
        }, enterNextDelay)
      }
    }, enterTouchDelay)
    if (onOpen) {
      onOpen(ev)
    }
  }

  const onMouseLeaveHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    if (!open) {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current)
      }
      setTimeout(() => {
        setOpen(false)
      }, leaveDelay)
    }
    if (onClose) {
      onClose(ev)
    }
  }
  const onBlurHandler: FocusEventHandler<HTMLDivElement> = (ev) => {
    if (!open) {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current)
      }
      setTimeout(() => {
        setOpen(false)
      }, leaveDelay)
    }
    if (onClose) {
      onClose(ev)
    }
  }
  const onMouseMoveHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    if (followCursor) {
      setMouseMove({ x: ev.clientX, y: ev.clientY })
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
      return { vertical: 'top', horizontal: 'right' }
    } else if (placement === 'bottom-start') {
      return { vertical: 'top', horizontal: 'left' }
    } else if (placement === 'bottom') {
      return { vertical: 'top', horizontal: 'center' }
    } else if (placement === 'left') {
      return { vertical: 'center', horizontal: 'right' }
    } else if (placement === 'left-end') {
      return { vertical: 'bottom', horizontal: 'right' }
    } else if (placement === 'left-start') {
      return { vertical: 'top', horizontal: 'right' }
    } else if (placement === 'right') {
      return { vertical: 'center', horizontal: 'left' }
    } else if (placement === 'right-end') {
      return { vertical: 'bottom', horizontal: 'left' }
    } else if (placement === 'right-start') {
      return { vertical: 'top', horizontal: 'left' }
    } else if (placement === 'top') {
      return { vertical: 'bottom', horizontal: 'center' }
    } else if (placement === 'top-end') {
      return { vertical: 'bottom', horizontal: 'right' }
    } else if (placement === 'top-start') {
      return { vertical: 'bottom', horizontal: 'left' }
    } else {
      return { vertical: 'top', horizontal: 'right' }
    }
  }

  return (
    <div className="inline-flex">
      <TooltipContext.Provider value={{ placement, mouseMove }}>
        <PopperComponent
          {...componentsProps?.popper}
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
          className={classNames({ [classes?.popover || '']: classes?.popover })}
          elevation={0}
          classes={{ root: 'pointer-events-none' }}
          disableTransition={disableTransition}
          {...rest}
        >
          <TooltipComponent
            id={id}
            ref={popoverRef}
            {...componentsProps?.tooltip}
            className={classNames(
              ' bg-neutral-500 rounded text-white px-2 py-1 font-medium text-xs font-base',
              {
                'mt-[14px] ':
                  placement === 'bottom' ||
                  placement === 'bottom-start' ||
                  placement === 'bottom-end',
                'ml-[14px] ':
                  placement === 'right' ||
                  placement === 'right-start' ||
                  placement === 'right-end',
                [classes?.tooltip || '']: classes?.tooltip,
                [className || '']: className,
              }
            )}
          >
            {title}
            <ArrowComponent
              {...componentsProps?.arrow}
              // style={{transform:`translate(${calcArrowPosition()}px, 0%)`,}}
              className={classNames('bocadillo ', {
                'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-1/2':
                  arrow && placement === 'top',
                'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-4':
                  arrow && placement === 'top-start',
                'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-[calc(100%-16px)]':
                  arrow && placement === 'top-end',
                'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-1/2':
                  arrow && placement === 'bottom',
                'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-4':
                  arrow && placement === 'bottom-start',
                'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-[calc(100%-16px)]':
                  arrow && placement === 'bottom-end',
                'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-1/2 left-0':
                  arrow && placement === 'right',
                'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-2 left-0':
                  arrow && placement === 'right-end',
                'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-[calc(100%-8px)] left-0':
                  arrow && placement === 'right-start',
                'border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-1/2 right-0':
                  arrow && placement === 'left',
                'border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-2 right-0':
                  arrow && placement === 'left-end',
                'border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-[calc(100%-8px)] right-0':
                  arrow && placement === 'left-start',
                [classes?.arrow || '']: classes?.arrow,
              })}
            ></ArrowComponent>
          </TooltipComponent>
        </PopperComponent>
      </TooltipContext.Provider>
      <div
        tabIndex={1}
        onMouseEnter={onMouseEnterHandler}
        onFocus={onFocusHandler}
        onMouseLeave={onMouseLeaveHandler}
        onBlur={onBlurHandler}
        onMouseMove={onMouseMoveHandler}
        onTouchStart={onTouchHandler}
      >
        {children}
      </div>
    </div>
  )
}
