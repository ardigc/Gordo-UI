import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
  HTMLAttributes,
} from 'react'
import { leftMargin, setPopoverPosition, topMargin } from './helpers'
import { TooltipContext } from '../Tooltip/Tooltip'
type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface RenderComponentProps extends DivReactProps {
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
  components?: { paper?: ElementType; root?: ElementType }
}
export function RenderComponent({
  children,
  className,
  marginThreshold,
  anchorEl,
  anchorPosition,
  transformOrigin,
  anchorReference,
  anchorOrigin,
  components,
  ...rest
}: RenderComponentProps) {
  const popoverRef = useRef<HTMLDivElement>(null)

  const [location, setLocation] = useState<DOMRect>()
  const [popoverSize, setpopoverSize] = useState<{
    height: number
    width: number
  }>()
  const { placement, mouseMove } = useContext(TooltipContext)
  useEffect(() => {
    if (!open) return
    const popover = popoverRef.current
    if (!popover) return
    popover.style.opacity = '0' // Establecer opacidad inicial
    setTimeout(() => {
      popover.style.opacity = '1' // Establecer opacidad completa después de 100ms
    }, 50)
    setpopoverSize({
      height: popover.offsetHeight,
      width: popover.offsetWidth,
    })

    animationFrameId = requestAnimationFrame(updatePosition)
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
    }
    animationFrameId = requestAnimationFrame(updatePosition)
  }

  const RenderComponent = components?.paper ? components.paper : 'div'
  function resolveAnchorEl(anchorEl: Element | (() => Element)) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl
  }

  const position = setPopoverPosition(
    anchorReference,
    marginThreshold,
    transformOrigin,
    anchorOrigin,
    anchorPosition,
    location,
    popoverSize,
    mouseMove,
    placement
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
      }}
      className={classNames({ [className || '']: className })}
      {...rest}
    >
      {children}
    </RenderComponent>
  )
}
