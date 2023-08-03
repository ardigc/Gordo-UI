import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
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
    </span>
  )
}
