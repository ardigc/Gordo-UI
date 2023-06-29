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
  const popoverRef = useRef<HTMLElement>(null)
  // const [popoverRef, setPopoverRef] = useState<HTMLElement>()
  const [popoverLocation, setPopoverLocation] = useState<DOMRect>()
  // const RenderComponent = slots?.paper ? slots.paper : 'div'
  const RenderRoot = slots?.root ? slots.root : 'div'
  useEffect(() => {
    if (!open) return
    if (!popoverRef.current) return
    const currentRef = popoverRef?.current.getBoundingClientRect()
    if (!currentRef) return
    console.log(currentRef)
    setPopoverLocation(currentRef)
  }, [open])
  function resolveContainer(container: Element | (() => Element)) {
    return typeof container === 'function' ? container() : container
  }
  function resolveAnchorEl(anchorEl: Element | (() => Element)) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl
  }
  const location = anchorEl
    ? resolveAnchorEl(anchorEl).getBoundingClientRect()
    : null
  const setPopoverTopPosition = (ref: DOMRect) => {
    if (anchorOrigin.vertical === 'top') {
      if (transformOrigin.vertical === 'top' && location) {
        return Math.max(marginThreshold, location.top)
      } else if (transformOrigin.vertical === 'center' && location) {
        return Math.max(marginThreshold, location.top - ref.height / 2)
      } else if (transformOrigin.vertical === 'bottom' && location) {
        return Math.max(marginThreshold, location.top - ref.height)
      }
    } else if (anchorOrigin.vertical === 'bottom') {
      if (transformOrigin.vertical === 'top' && location) {
        return Math.max(marginThreshold, location?.top + location?.height)
      } else if (transformOrigin.vertical === 'center' && location) {
        return Math.max(
          marginThreshold,
          location?.top + location?.height - ref.height / 2
        )
      } else if (transformOrigin.vertical === 'bottom' && location) {
        return Math.max(
          marginThreshold,
          location?.top + location?.height - ref.height
        )
      }
    } else if (anchorOrigin.vertical === 'center') {
      if (!location) return
      if (transformOrigin.vertical === 'top' && location) {
        return Math.max(marginThreshold, location?.top + location?.height / 2)
      } else if (transformOrigin.vertical === 'center' && location) {
        return Math.max(
          marginThreshold,
          location?.top + location?.height / 2 - ref.height / 2
        )
      } else if (transformOrigin.vertical === 'bottom' && location) {
        return Math.max(
          marginThreshold,
          location?.top + location?.height / 2 - ref.height
        )
      }
    }
  }
  const setPopoverLeftPosition = (ref: DOMRect) => {
    console.log('ref:', ref, transformOrigin)
    if (anchorOrigin.horizontal === 'left') {
      if (transformOrigin.horizontal === 'left' && location) {
        return Math.max(marginThreshold, location.left)
      } else if (transformOrigin.horizontal === 'center' && location) {
        return Math.max(marginThreshold, location.left - ref.width / 2)
      } else if (transformOrigin.horizontal === 'right' && location) {
        return Math.max(marginThreshold, location.left - ref.width)
      }
    } else if (anchorOrigin.horizontal === 'right') {
      if (transformOrigin.horizontal === 'left' && location) {
        return Math.max(marginThreshold, location?.left + location?.width)
      } else if (transformOrigin.horizontal === 'center' && location) {
        return Math.max(
          marginThreshold,
          location?.left + location?.width - ref.width / 2
        )
      } else if (transformOrigin.horizontal === 'right' && location) {
        return Math.max(
          marginThreshold,
          location?.left + location?.width - ref.width
        )
      }
    } else if (anchorOrigin.horizontal === 'center') {
      if (transformOrigin.horizontal === 'left' && location) {
        return Math.max(marginThreshold, location?.left + location?.width / 2)
      } else if (transformOrigin.horizontal === 'center' && location) {
        return Math.max(
          marginThreshold,
          location?.left + location?.width / 2 - ref.width / 2
        )
      } else if (transformOrigin.horizontal === 'right' && location) {
        return Math.max(
          marginThreshold,
          location?.left + location?.width / 2 - ref.width
        )
      }
    }
  }
  const setPopoverTransformY = (popoverLocation: DOMRect) => {
    if (transformOrigin.vertical === 'top') {
      return 0
    } else if (transformOrigin.vertical === 'center') {
      console.log(popoverLocation, anchorPosition)
      if (!anchorPosition.top || !popoverLocation?.height) return
      console.log('despues')
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
  const setPopoverTransformX = (popoverLocation: DOMRect) => {
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
      // const currentRef = popoverRef?.getBoundingClientRect()
      if (!popoverLocation) return
      const top = setPopoverTopPosition(popoverLocation)
      const left = setPopoverLeftPosition(popoverLocation)

      // const transformX = setPopoverTransformX(currentRef)
      // const transformY = setPopoverTransformY(currentRef)
      // console.log(transformX, transformY)
      return { top: top, left: left }
    } else if (anchorReference === 'anchorPosition') {
      const top = `${Math.max(marginThreshold, anchorPosition.top!)}px`
      const left = `${Math.max(marginThreshold, anchorPosition.left!)}px`
      // const currentRef = popoverRef?.getBoundingClientRect()
      // if (!currentRef) return
      const transformX = setPopoverTransformX(currentRef)
      const transformY = setPopoverTransformY(currentRef)
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
            className={classNames('fixed inset-0 z-[1300] ', {
              [classes?.root || '']: classes?.root,
            })}
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
                // translate: `${position?.transformX} ${position?.transformY}`,
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
