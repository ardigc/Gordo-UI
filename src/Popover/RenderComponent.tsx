import classNames from 'classnames'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { setPopoverPosition } from './helpers'
interface RenderComponentProps {
  children: ReactNode
  className: string
  marginThreshold: number
  anchorEl?: Element | (() => Element)
  anchorPosition?: { left?: number; top?: number }
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  anchorReference: 'anchorEl' | 'anchorPosition'
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
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
}: RenderComponentProps) {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [popoverSize, setpopoverSize] = useState<{
    height: number
    width: number
  }>()
  useEffect(() => {
    if (!open) return

    const popover = popoverRef.current
    if (!popover) return
    popover.style.opacity = '0' // Establecer opacidad inicial
    setTimeout(() => {
      popover.style.opacity = '1' // Establecer opacidad completa después de 100ms
    }, 1)

    setpopoverSize({
      height: popover.offsetHeight,
      width: popover.offsetWidth,
    })
  }, [])

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
    anchorPosition,
    location,
    popoverSize
  )
  return (
    <div
      ref={popoverRef}
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
