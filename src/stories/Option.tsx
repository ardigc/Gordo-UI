import { ReactNode } from 'react'

export interface OptionProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
}
// Partial<OptionProps>
export default function Option({ children, className, onClick }: OptionProps) {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  )
}
