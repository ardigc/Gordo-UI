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
}
export default function TableCell({
  children,
  align = 'left',
  className,
  component,
  padding = 'normal',
  ...rest
}: TableCellProps) {
  const RenderComponent = component ? component : 'td'
  return (
    <RenderComponent
      className={classNames(
        'font-base text-base font-normal border-b table-cell border-b-gray-100',
        {
          'p-4': padding === 'normal',
          'pl-1': padding === 'checkbox',
          'text-center': align === 'center',
          'text-justify': align === 'justify',
          'text-left': align === 'left',
          'text-right': align === 'right',
          [className || '']: className,
        }
      )}
      {...rest}
    >
      {children}
    </RenderComponent>
  )
}
