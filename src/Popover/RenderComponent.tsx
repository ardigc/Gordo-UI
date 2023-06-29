import classNames from 'classnames'
import { ReactNode } from 'react'
interface RenderComponentProps {
  children?: ReactNode
  className?: string
}
export default function RenderComponent({
  children,
  className,
}: RenderComponentProps) {
  const position = setPopoverPositi
  return (
    <div
      style={{
        top: position?.top,
        left: position?.left,
        // translate: `${position?.transformX} ${position?.transformY}`,
      }}
      className={classNames({ [className || '']: className })}
    >
      {children}
    </div>
  )
}
