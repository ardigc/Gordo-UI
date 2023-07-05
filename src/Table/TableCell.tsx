import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  ReactNode,
  TdHTMLAttributes,
} from 'react'

type TableReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TableCellProps extends TableReactProps {
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
  variant = 'body',
  ...rest
}: TableCellProps) {
  const RenderComponent = component ? component : 'td'
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
