import classNames from 'classnames'
import {
  ElementType,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useRef } from 'react'
import { createPortal } from 'react-dom'
import RenderComponent from './RenderComponent'
export interface PopoverProps {
  children?: ReactNode
  open: boolean
  onClose?: () => void
  anchorReference?: 'anchorEl' | 'anchorPosition'
  anchorEl?: Element | (() => Element)
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  anchorPosition?: { left?: number; top?: number }
  className?: string
  container?: Element | (() => Element)
  elevation?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
  marginThreshold?: number
  slotProps?: { paper?: () => void | object; root?: () => void | object }
  slots?: { paper?: ElementType; root?: ElementType }
  id?: string
  disableTransition?: boolean
  classes?: { root?: string; paper?: string }
  // Transition component will be render when we implent transition library
  // TransitionComponent?: ElementType
  // transitionDuration?:'auto'| number| { appear?: number, enter?: number, exit?: number }
  // TransitionProps?: object
}
export default function Popover({
  children,
  open,
  onClose,
  anchorReference = 'anchorEl',
  anchorEl,
  anchorOrigin = { vertical: 'top', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  anchorPosition = { top: 0, left: 0 },
  className,
  container,
  elevation = 4,
  slots,
  marginThreshold = 16,
  slotProps,
  id,
  disableTransition,
  classes,
}: PopoverProps) {
  // const popoverRef = useRef<HTMLElement>(null)
  // const [popoverRef, setPopoverRef] = useState<HTMLElement>()
  // const RenderComponent = slots?.paper ? slots.paper : 'div'
  const RenderRoot = slots?.root ? slots.root : 'div'
  function resolveContainer(container: Element | (() => Element)) {
    return typeof container === 'function' ? container() : container
  }

  return (
    <>
      {open &&
        createPortal(
          <RenderRoot
            id={id}
            {...slotProps?.root}
            className={classNames('fixed inset-0 z-[1300] ', {
              [classes?.root || '']: classes?.root,
            })}
          >
            <div
              onClick={onClose}
              className={classNames('fixed inset-0 flex bg-transparent -z-[1]')}
            ></div>
            <RenderComponent
              {...slotProps?.paper}
              // style={{
              //   top: position?.top,
              //   left: position?.left,
              //   // translate: `${position?.transformX} ${position?.transformY}`,
              // }}
              disableTransition={disableTransition}
              marginThreshold={marginThreshold}
              anchorEl={anchorEl}
              anchorPosition={anchorPosition}
              anchorReference={anchorReference}
              transformOrigin={transformOrigin}
              anchorOrigin={anchorOrigin}
              className={classNames('absolute  bg-white rounded-[4px]  ', {
                'animate-grow': !disableTransition,
                'shadow-1': elevation === 1,
                'shadow-2': elevation === 2,
                'shadow-3': elevation === 3,
                'shadow-4': elevation === 4,
                'shadow-5': elevation === 5,
                'shadow-6': elevation === 6,
                'shadow-7': elevation === 7,
                'shadow-8': elevation === 8,
                'shadow-9': elevation === 9,
                'shadow-10': elevation === 10,
                'shadow-11': elevation === 11,
                'shadow-12': elevation === 12,
                'shadow-13': elevation === 13,
                'shadow-14': elevation === 14,
                [classes?.paper || '']: classes?.paper,
                [className || '']: className,
              })}
            >
              {children}
            </RenderComponent>
          </RenderRoot>,
          container ? resolveContainer(container) : document.body
        )}
    </>
  )
}
