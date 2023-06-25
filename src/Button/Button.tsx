import classNames from 'classnames'
import { ReactNode } from 'react'

export interface ButtonProps {
  children?: ReactNode
  variant?: 'contained' | 'outlined' | 'text'
}
export default function Button({ children, variant = 'text' }: ButtonProps) {
  return (
    <button
      className={classNames(
        'inline-flex items-center justify-center relative bg-transparent outline-none uppercase rounded-md',
        { ' hover:bg-primary-color-10 ': true }
      )}
    >
      {children}
    </button>
  )
}
