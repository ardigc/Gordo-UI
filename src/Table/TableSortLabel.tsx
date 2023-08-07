import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  ElementType,
} from 'react'
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
  hideSortIcon?: boolean
  IconComponent?: ElementType
}
export function TableSortLabel({
  children,
  active,
  className,
  direction = 'asc',
  hideSortIcon = false,
  IconComponent,
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
      {!IconComponent && (
        <div
          className={classNames('transition-transform', {
            'opacity-100': active,
            'opacity-0 group-hover:opacity-30': !active && !hideSortIcon,
            'opacity-0 ': !active && hideSortIcon,
            'rotate-180': direction === 'asc',
            'rotate-0': direction === 'desc',
          })}
        >
          <ArrowDown />
        </div>
      )}
      {IconComponent && <IconComponent />}
    </span>
  )
}
