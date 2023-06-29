import classNames from 'classnames'
import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  ReactElement,
  JSXElementConstructor,
} from 'react'
import { setPopoverPosition } from './helpers'

interface RenderComponentProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
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
  const [popoverLocation, setPopoverLocation] = useState<DOMRect>()

  useEffect(() => {
    if (!open) return
    if (!popoverRef.current) return
    const currentRef = popoverRef?.current.getBoundingClientRect()
    if (!currentRef) return
    console.log(currentRef)
    setPopoverLocation(currentRef)
  }, [open])
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
      //   ref={popoverRef}
      style={{
        top: position?.top,
        left: position?.left,
        // translate: `${position?.transformX} ${position?.transformY}`,
      }}
      className={classNames({ [className || '']: className })}
    >
      {React.cloneElement(children, { ref: popoverRef })}
    </div>
  )
}
