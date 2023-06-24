import classNames from 'classnames'
import { ReactNode, ElementType } from 'react'

export interface FormHelperProps {
  children?: ReactNode
  className?: string
  component?: ElementType
  componentProps?: React.HTMLAttributes<HTMLElement>
  disabled?: boolean
}
export default function FormHelper({
  children,
  className,
  component,
  componentProps,
  disabled,
}: FormHelperProps) {
  const RederComponent = component ? component : 'p'

  return (
    <RederComponent
      className={classNames('text-xs text-left tracking-wide', {
        'opacity-30': disabled,
        [className || '']: className,
      })}
      {...componentProps}
    >
      {children}
    </RederComponent>
  )
}
