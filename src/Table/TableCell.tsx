import classNames from 'classnames'
import { DetailedHTMLProps, ReactNode, TdHTMLAttributes } from 'react'

type TableReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TableCellProps extends TableReactProps {
  children?: ReactNode
  align?: 'center' | 'justify' | 'left' | 'right'
  className?: string
}
export default function TableCell({
  children,
  align = 'left',
  className,
  ...rest
}: TableCellProps) {
  return (
    <td
      className={classNames(
        'font-base text-base font-normal p-4 border-b border-b-gray-100',
        {
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
    </td>
  )
}
