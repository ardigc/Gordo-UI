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
  className?: string
  direction?: 'asc' | 'desc'
}
export default function TableSortLabel({
  children,
  active,
  className,
  direction = 'asc',
  ...rest
}: TableSortLabelProps) {
  return (
    <span
      className={classNames(
        'group inline-flex flex-inherit relative text-black bg-transparent select-none cursor-pointer align-middle justify-start items-center',
        { [className || '']: className }
      )}
      {...rest}
    >
      {children}
      <div
        className={classNames('', {
          'opacity-100': active,
          'opacity-0 group-hover:opacity-30': !active,
          'rotate-180': direction === 'asc',
        })}
      >
        <ArrowDown />
      </div>
    </span>
  )
}
