import classNames from 'classnames'
import { ReactNode } from 'react'
export interface InputLabelProps {
  children?: ReactNode
  className?: string
  htmlFor?: string
  disableAnimation?: boolean
  shrink?: boolean
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
  disabled?: boolean
  error?: boolean
  margin?: 'dense' | 'none'
  variant?: 'filled' | 'outlined' | 'standard'
}
export default function InputLabel({
  children,
  htmlFor,
  className,
  disableAnimation,
  shrink,
  error,
  color = error ? 'error' : 'primary',
  labelProps,
  disabled,
  margin,
  variant = 'standard',
}: InputLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        'absolute origin-top-left text-lg cursor-text left-0 z-10 ',
        {
          'normal-label-text-field-filled': variant === 'filled' && !shrink,
          'mini-label-text-field-filled': variant === 'filled' && shrink,
          ' translate-y-4': variant === 'standard' && !shrink,
          ' -translate-y-1  scale-75': variant === 'standard' && shrink,
          'opacity-30': disabled,
          'opacity-70': !disabled,
          'transition-all': !disableAnimation,
          'mt-2 mb-1': margin === 'dense',
          [`text-${color}-color`]: shrink && color,

          [className || '']: className,
        }
      )}
      {...labelProps}
    >
      {children}
    </label>
  )
}
