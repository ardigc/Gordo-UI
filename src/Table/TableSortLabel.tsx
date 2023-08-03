import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { ArrowDown } from '../components/icons/Icons'
type SpanReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>
export interface TableSortLabelProps extends SpanReactProps {
  children?: ReactNode
}
export default function TableSortLabel({
  children,
  ...rest
}: TableSortLabelProps) {
  return (
    <span className="flex flex-row-reverse" {...rest}>
      {children}
      <div>
        <ArrowDown />
      </div>
    </span>
  )
}
