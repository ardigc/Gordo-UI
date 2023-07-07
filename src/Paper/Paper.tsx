import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
type PaperReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface PaperProps extends PaperReactProps {
  children: ReactNode
  className?: string
}
export default function Paper({ children, className }: PaperProps) {
  return (
    <div className={classNames({ [className || '']: className })}>
      {children}
    </div>
  )
}
