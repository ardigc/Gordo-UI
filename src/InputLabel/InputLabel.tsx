import classNames from 'classnames'
import { ReactNode } from 'react'
export interface InputLabelProps {
  children?: ReactNode
  className?: string
  htmlFor?: string
  disableAnimation?: boolean
  shrink?: boolean
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
  labelProps?: {}
}
export default function InputLabel({
  children,
  htmlFor,
  className,
  disableAnimation,
  shrink,
  color,
  labelProps,
}: InputLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames('absolute origin-top-left', {
        [className || '']: className,
        'transition-all': !disableAnimation,
        ' -translate-y-3  scale-75': shrink,
        'text-error-color': shrink && color === 'error',
        'text-primary-color': shrink && color === 'primary',
        'text-secundary-color': shrink && color === 'secundary',
        'text-warning-color': shrink && color === 'warning',
        'text-info-color': shrink && color === 'info',
        'text-success-color': shrink && color === 'success',
      })}
      {...labelProps}
    >
      {children}
    </label>
  )
}
