import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  ReactNode,
  TdHTMLAttributes,
  useContext,
} from 'react'
import { TableHeadContext } from './TableHead'
import { TableContext } from './Table'

type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TableCellProps extends TableCellReactProps {
  children?: ReactNode
  align?: 'center' | 'justify' | 'left' | 'right'
  className?: string
  component?: ElementType
  padding?: 'checkbox' | 'none' | 'normal'
  size?: 'medium' | 'small'
  // sortDirection?:'asc'|'desc'
  variant?: 'body' | 'footer' | 'head'
}
export default function TableCell({
  children,
  align = 'left',
  className,
  component,
  padding = 'normal',
  size = 'medium',
  // sortDirection,
  variant,
  ...rest
}: TableCellProps) {
  const { head } = useContext(TableHeadContext)
  const { padding } = useContext(TableContext)
  variant = variant ? variant : head ? 'head' : 'body'
  const RenderComponent = component
    ? component
    : variant === 'head'
    ? 'th'
    : 'td'
  // const ariaSort=sortDirection==='asc'?'ascending':sortDirection==='desc'?'descending':false
  return (
    <RenderComponent
      className={classNames(' border-b table-cell border-b-gray-100 ', {
        'p-4': padding === 'normal' && size === 'medium',
        'px-4 py-[6px]': padding === 'normal' && size === 'small',
        'pl-1': padding === 'checkbox',
        'text-center': align === 'center',
        'text-justify': align === 'justify',
        'text-left': align === 'left',
        'text-right': align === 'right',
        'font-base text-base font-normal': variant === 'body',
        'font-base text-base text-black font-medium': variant === 'head',
        'font-base text-sm text-gray-600 font-normal': variant === 'footer',
        [className || '']: className,
      })}
      {...rest}
    >
      {children}
    </RenderComponent>
  )
}
