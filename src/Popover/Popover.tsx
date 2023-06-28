import classNames from 'classnames'
import { ElementType, ReactNode, useEffect, useState } from 'react'
import { useRef } from 'react'
import { createPortal } from 'react-dom'
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
}: PopoverProps) {
  const popoverRef = useRef<HTMLElement>(null)
  const [popoverLocation, setPopoverLocation] = useState<DOMRect>()
  const RenderComponent = slots?.paper ? slots.paper : 'div'
  const RenderRoot = slots?.root ? slots.root : 'div'
  useEffect(() => {
    const currentRef = popoverRef.current
    if (!currentRef) return
    setPopoverLocation(currentRef.getBoundingClientRect())
  }, [popoverRef])
  function resolveContainer(container: Element | (() => Element)) {
    return typeof container === 'function' ? container() : container
  }
  function resolveAnchorEl(anchorEl: Element | (() => Element)) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl
  }
  const location = anchorEl
    ? resolveAnchorEl(anchorEl).getBoundingClientRect()
    : null
  const setPopoverTopPosition = () => {
    if (anchorOrigin.vertical === 'top') {
      return location?.top
    } else if (anchorOrigin.vertical === 'bottom') {
      if (!location) return
      return location?.top + location?.height
    } else if (anchorOrigin.vertical === 'center') {
      if (!location) return
      return location?.top + location?.height / 2
    }
  }
  const setPopoverLeftPosition = () => {
    if (anchorOrigin.horizontal === 'left') {
      return location?.left
    } else if (anchorOrigin.horizontal === 'right') {
      if (!location) return
      return location?.left + location?.width
    } else if (anchorOrigin.horizontal === 'center') {
      if (!location) return
      return location?.left + location?.width / 2
    }
  }
  const setPopoverTransformY = () => {
    if (transformOrigin.vertical === 'top') {
      return 0
    } else if (transformOrigin.vertical === 'center') {
      if (!anchorPosition.top || !popoverLocation?.height) return
      if (anchorPosition.top + popoverLocation?.height / 2 < marginThreshold) {
        console.log('hola')
        return 0
      }
      return '-50%'
    } else if (transformOrigin.vertical === 'bottom') {
      if (!anchorPosition.top || !popoverLocation?.height) return
      if (anchorPosition.top + popoverLocation?.height < marginThreshold) {
        return 0
      }
      return '-100%'
    }
  }
  const setPopoverTransformX = () => {
    if (transformOrigin.horizontal === 'left') {
      return 0
    } else if (transformOrigin.horizontal === 'center') {
      if (!anchorPosition.left || !popoverLocation?.width) return
      if (anchorPosition.left + popoverLocation?.width / 2 < marginThreshold) {
        return 0
      }

      return '-50%'
    } else if (transformOrigin.horizontal === 'right') {
      if (!anchorPosition.left || !popoverLocation?.width) return
      if (anchorPosition.left + popoverLocation?.width < marginThreshold) {
        return 0
      }
      return '-100%'
    }
  }
  const setPopoverPosition = () => {
    if (anchorReference === 'anchorEl') {
      const top = setPopoverTopPosition()
      const left = setPopoverLeftPosition()
      const transformX = setPopoverTransformX()
      const transformY = setPopoverTransformY()
      return { top: top, left: left, transformX, transformY }
    } else if (anchorReference === 'anchorPosition') {
      const top = `${Math.max(marginThreshold, anchorPosition.top!)}px`
      const left = `${Math.max(marginThreshold, anchorPosition.left!)}px`
      const transformX = setPopoverTransformX()
      const transformY = setPopoverTransformY()
      return { top: top, left: left, transformX, transformY }
    }
  }
  const position = setPopoverPosition()

  return (
    <>
      {open &&
        createPortal(
          <RenderRoot
            id={id}
            {...slotProps?.root}
            className={classNames('fixed inset-0 z-[1300]')}
          >
            <div
              onClick={onClose}
              className={classNames('fixed inset-0 flex bg-transparent -z-[1]')}
            ></div>
            <RenderComponent
              ref={popoverRef}
              {...slotProps?.paper}
              style={{
                top: position?.top,
                left: position?.left,
                translate: `${position?.transformX} ${position?.transformY}`,
              }}
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
