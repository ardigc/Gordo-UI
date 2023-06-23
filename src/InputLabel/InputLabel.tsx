import classNames from 'classnames'
import { ReactNode } from 'react'
export interface InputLabelProps {
  children?: ReactNode
  className?: string
  htmlFor?: string
  disableAnimation?: boolean
}
export default function InputLabel({
  children,
  htmlFor,
  className,
  disableAnimation,
}: InputLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames({
        [className || '']: className,
        'transition-all': !disableAnimation,
      })}
    >
      {children}
    </label>
  )
}
