import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { ArrowDown } from '../components/icons/Icons'
type SpanReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>
export interface TableSortLabelProps extends SpanReactProps {
  children?: ReactNode
  active?: boolean
}
export default function TableSortLabel({
  children,
  ...rest
}: TableSortLabelProps) {
  return (
    <span
      className="inline-flex flex-inherit relative text-black bg-transparent select-none cursor-pointer align-middle justify-start items-center"
      {...rest}
    >
      {children}
      <div>
        <ArrowDown />
      </div>
    </span>
  )
}
