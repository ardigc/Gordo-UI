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
  timeout?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000
}
export default function Collapse({
  children,
  open,
  className,
  collapsedSize,
  component,
  easing,
  timeout = 500,
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
      className={classNames('transition-all overflow-hidden', {
        [className || '']: className,
        ' min-h-0  ': open,
        'min-h-0 ': !open,
        'ease-linear': easing === 'ease-linear',
        'ease-in': easing === 'ease-in',
        'ease-out': easing === 'ease-out',
        'ease-in-out': easing === 'ease-in-out',
        'duration-0': timeout === 0,
        'duration-75': timeout === 75,
        'duration-100': timeout === 100,
        'duration-150': timeout === 150,
        'duration-200': timeout === 200,
        'duration-300': timeout === 300,
        'duration-500': timeout === 500,
        'duration-700': timeout === 700,
        'duration-1000': timeout === 1000,
      })}
    >
      {/* {children} */}
      <>{React.cloneElement(children, { ref: childrenRef })}</>
    </RenderComponent>
  )
}
