import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type TableBodyReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>
export interface TableBodyProps extends TableBodyReactProps {
  children?: ReactNode
  className?: string
}
export default function TableBody({
  children,
  className,
  ...rest
}: TableBodyProps) {
  return (
    <tbody
      className={classNames('table-row-group', {
        [className || '']: className,
      })}
      {...rest}
    >
      {children}
    </tbody>
  )
}
