import classNames from 'classnames'
import {
  ElementType,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { leftMargin, setPopoverPosition, topMargin } from './helpers'
import { TooltipContext } from '../Tooltip/Tooltip'
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
  slots?: { paper?: ElementType; root?: ElementType }
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
  slots,
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
  const { placement } = useContext(TooltipContext)
  const RenderComponent = slots?.paper ? slots.paper : 'div'
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
    <RenderComponent
      ref={popoverRef}
      style={{
        top: position?.top
          ? position?.top + topMargin(placement)
          : position?.top,
        left: position?.left
          ? position?.left + leftMargin(placement)
          : position?.left,
        // translate: `${position?.transformX} ${position?.transformY}`,
      }}
      className={classNames({ [className || '']: className })}
      // className='absolute'
    >
      {children}
    </RenderComponent>
  )
}
