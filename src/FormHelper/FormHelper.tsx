import classNames from 'classnames'
import { ReactNode } from 'react'

export interface FormHelperProps {
  children: ReactNode
}
export default function FormHelper({ children }: FormHelperProps) {
  return (
    <p className={classNames('text-xs text-left tracking-wide')}>{children}</p>
  )
}
