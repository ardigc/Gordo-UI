import classNames from 'classnames'
import { ReactNode, useEffect, useId, useRef, useState } from 'react'
import { setPopoverPosition } from './helpers'
interface RenderComponentProps {
  children: ReactNode
  className: string
  marginThreshold: number
  anchorEl?: Element | (() => Element)
  anchorPosition: { left?: number; top?: number }
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  anchorReference: 'anchorEl' | 'anchorPosition'
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  disableTransition?: boolean
}
export default function RenderComponent({
  children,
  className,
  marginThreshold,
  anchorEl,
  anchorPosition,
  transformOrigin,
  anchorReference,
  anchorOrigin,
  disableTransition,
}: RenderComponentProps) {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [popoverLocation, setPopoverLocation] = useState<DOMRect>()
  useEffect(() => {
    if (disableTransition) {
      if (!open) return
      // if (!popoverRef.current) return
      const popover = popoverRef.current
      if (!popover) return
      const currentRef = popover.getBoundingClientRect()
      if (!currentRef) return
      console.log(currentRef)
      setPopoverLocation(currentRef)
    }
  }, [])
  // useEffect(() => {
  //     const popover= popoverRef.current
  //     console.log(popover)
  //     const currentRef = popover?.getBoundingClientRect()
  //     console.log('este es el bueno',currentRef)
  //   })

  function resolveAnchorEl(anchorEl: Element | (() => Element)) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl
  }
  const location = anchorEl
    ? resolveAnchorEl(anchorEl).getBoundingClientRect()
    : undefined
  const position = setPopoverPosition(
    anchorReference,
    marginThreshold,
    transformOrigin,
    anchorOrigin,
    location,
    popoverLocation
  )
  return (
    <div
      ref={popoverRef}
      onAnimationEnd={(ev) =>
        console.log('fin animacion', ev.currentTarget.getBoundingClientRect())
      }
      style={{
        top: position?.top,
        left: position?.left,
        // translate: `${position?.transformX} ${position?.transformY}`,
      }}
      className={classNames({ [className || '']: className })}
      // className='absolute'
    >
      {children}
    </div>
  )
}
