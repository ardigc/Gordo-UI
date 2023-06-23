import classNames from 'classnames'
import { ReactNode } from 'react'
export interface InputLabelProps {
  children?: ReactNode
  className?: string
  htmlFor?: string
}
export default function InputLabel({
  children,
  htmlFor,
  className,
}: InputLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames({ [className || '']: className })}
    >
      {children}
    </label>
  )
}
