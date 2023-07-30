import classNames from 'classnames'
import React, {
  ElementType,
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface CollapseProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  open?: boolean
  className?: string
  collapsedSize?: number | string
  component?: ElementType
  orientation?: 'horizontal' | 'vertical'
  easing?: 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
}
export default function Collapse({
  children,
  open,
  className,
  collapsedSize,
  component,
  easing,
}: CollapseProps) {
  const childrenRef = useRef<HTMLElement>(null)
  const [childrenHeight, setChildrenHeight] = useState(0)
  useEffect(() => {
    if (childrenRef.current?.offsetHeight) {
      setChildrenHeight(childrenRef.current?.offsetHeight)
    }
  }, [open])
  const RenderComponent = component ? component : 'div'
  return (
    <RenderComponent
      style={{
        height: open ? childrenHeight : collapsedSize ? collapsedSize : 0,
      }}
      className={classNames('transition-all duration-500  overflow-hidden', {
        [className || '']: className,
        ' min-h-0  ': open,
        'min-h-0 ': !open,
        'ease-linear': easing === 'ease-linear',
        'ease-in': easing === 'ease-in',
        'ease-out': easing === 'ease-out',
        'ease-in-out': easing === 'ease-in-out',
      })}
    >
      {/* {children} */}
      <>{React.cloneElement(children, { ref: childrenRef })}</>
    </RenderComponent>
  )
}
