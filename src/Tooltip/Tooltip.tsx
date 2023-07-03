import {
  // JSXElementConstructor,
  MouseEventHandler,
  // ReactElement,
  ReactNode,
  createContext,
  useRef,
  useState,
} from 'react'
import Popover from '../Popover/Popover'
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
  // setAnchorRect?: Dispatch<SetStateAction<DOMRect | undefined>>
  // setContextPopoverPosition?: Dispatch<
  //   SetStateAction<{
  //     height: number
  //     width: number
  //     top: number
  //     left: number
  //   }|undefined>
  // >
}>({})
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
  disableTransition?: boolean
  arrow?: boolean
}
export default function Tooltip({
  children,
  title,
  placement,
  open,
  disableTransition,
  arrow,
}: TooltipProps) {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const popoverRef = useRef<HTMLDivElement>(null)

  const [opened, setOpen] = useState(open ? open : false)
  // useEffect(()=>{
  //   const popover = popoverRef.current
  //   if (!popover) return

  //   console.log(popover.getBoundingClientRect())
  //   console.log('hola',popoverPosition)
  //    setContextPopoverPosition({
  //       height: popover.offsetHeight,
  //       width: popover.offsetWidth,
  //       left: popover.offsetLeft,
  //       top:popover.offsetTop,
  //   })
  // })
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
      return { vertical: 'top', horizontal: 'right' }
    } else if (placement === 'bottom-start') {
      return { vertical: 'top', horizontal: 'left' }
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
  // const calcArrowPosition=()=>{
  //   if (anchorRect&&popoverPosition) {

  //     // console.log(anchorRect.left, popoverPosition.left)
  //     const x = (anchorRect?.left-popoverPosition?.left)
  //     // console.log(x)
  //     return x
  //   }
  // }
  return (
    <div className="inline-flex">
      <TooltipContext.Provider value={{ placement }}>
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
          disableTransition={disableTransition}
        >
          <div
            ref={popoverRef}
            className={classNames(
              ' bg-neutral-500 rounded text-white px-2 py-1 font-medium text-xs font-base',
              {
                // 'before:left-[calc(0%)]':true,
                'mt-[14px] ':
                  placement === 'bottom' ||
                  placement === 'bottom-start' ||
                  placement === 'bottom-end',
                // 'mb-[14px] ': placement === 'top' || placement === 'top-start' ||placement === 'top-end',
                // 'mr-[14px] ': placement === 'left' || placement === 'left-start' ||placement === 'left-end',
                'ml-[14px] ':
                  placement === 'right' ||
                  placement === 'right-start' ||
                  placement === 'right-end',
              }
            )}
          >
            {title}
            <span
              // style={{transform:`translate(${calcArrowPosition()}px, 0%)`,}}
              className={classNames('bocadillo ', {
                'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[40%] translate-x-[-250%] top-0 left-1/2':
                  arrow && placement === 'top',
                'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[40%] translate-x-[-250%] top-0 left-4':
                  arrow && placement === 'top-start',
                'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[40%] translate-x-[-250%] top-0 left-[calc(100%-16px)]':
                  arrow && placement === 'top-end',
                'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-40%] translate-x-[-250%] bottom-0 left-1/2':
                  arrow && placement === 'bottom',
                'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-40%] translate-x-[-250%] bottom-0 left-4':
                  arrow && placement === 'bottom-start',
                'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-40%] translate-x-[-250%] bottom-0 left-[calc(100%-16px)]':
                  arrow && placement === 'bottom-end',
                'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-1/2 left-0':
                  arrow && placement === 'right',
                'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-2 left-0':
                  arrow && placement === 'right-end',
                'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-[calc(100%-8px)] left-0':
                  arrow && placement === 'right-start',
              })}
            ></span>
          </div>
        </Popover>
      </TooltipContext.Provider>
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
