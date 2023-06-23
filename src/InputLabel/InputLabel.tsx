import classNames from 'classnames'
import { ReactNode } from 'react'
export interface InputLabelProps {
  children?: ReactNode
  className?: string
  htmlFor?: string
  disableAnimation?: boolean
  shrink?: boolean
}
export default function InputLabel({
  children,
  htmlFor,
  className,
  disableAnimation,
  shrink,
}: InputLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames('absolute origin-top-left', {
        [className || '']: className,
        'transition-all': !disableAnimation,
        '-translate-y-3  scale-75': shrink,
      })}
    >
      {children}
    </label>
  )
}
