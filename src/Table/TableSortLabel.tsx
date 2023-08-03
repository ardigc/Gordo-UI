import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { ArrowDown } from '../components/icons/Icons'
import classNames from 'classnames'
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
  active,
  ...rest
}: TableSortLabelProps) {
  return (
    <span
      className="group inline-flex flex-inherit relative text-black bg-transparent select-none cursor-pointer align-middle justify-start items-center"
      {...rest}
    >
      {children}
      <div
        className={classNames('', {
          'opacity-100': active,
          'opacity-0 group-hover:opacity-30': !active,
        })}
      >
        <ArrowDown />
      </div>
    </span>
  )
}
