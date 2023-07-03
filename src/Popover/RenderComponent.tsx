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
  // screenVariation?: {
  //   initialScreenW: number | null
  //   initialScreenH: number | null
  //   currentScreenW: number | null
  //   currentScreenH: number | null
  // }
  // id: string
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
}: // screenVariation,
// id,
RenderComponentProps) {
  const popoverRef = useRef<HTMLDivElement>(null)
  // const triggerRef = useRef<HTMLDivElement>(null);
  // const [positioned, setPosition] = useState({ x: 0, y: 0 })
  const [location, setLocation] = useState<DOMRect>()
  const [popoverSize, setpopoverSize] = useState<{
    height: number
    width: number
  }>()
  const { placement } = useContext(TooltipContext)
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
    animationFrameId = requestAnimationFrame(updatePosition)
    // updatePosition()
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])
  let animationFrameId: number | null = null

  const updatePosition = () => {
    if (anchorEl) {
      const rect = resolveAnchorEl(anchorEl).getBoundingClientRect()
      setLocation(rect)
      // if (setAnchorRect) {

      //   setAnchorRect(rect)
      // }
      // setPosition({
      //   x: rect.left + window.scrollX,
      //   y: rect.top + window.scrollY,
      // })
    }
    animationFrameId = requestAnimationFrame(updatePosition)
  }

  const RenderComponent = slots?.paper ? slots.paper : 'div'
  function resolveAnchorEl(anchorEl: Element | (() => Element)) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl
  }
  // const location = anchorEl
  //   ? resolveAnchorEl(anchorEl).getBoundingClientRect()
  //   : undefined
  // console.log(location)
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
      // id={id}
      ref={popoverRef}
      style={{
        top: position?.top
          ? position?.top + topMargin(placement)
          : position?.top,
        left: position?.left
          ? position?.left + leftMargin(placement)
          : // -
            // (screenVariation?.currentScreenW && screenVariation.initialScreenW
            //   ? screenVariation?.initialScreenW -
            //     screenVariation?.initialScreenW
            //   : 0)
            position?.left,
        // translate: `${position?.transformX} ${position?.transformY}`,
      }}
      className={classNames({ [className || '']: className })}
      // className='absolute'
    >
      {children}
    </RenderComponent>
  )
}
