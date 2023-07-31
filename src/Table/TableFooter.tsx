import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type TableFooterReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>
export interface TableFooterProps extends TableFooterReactProps {
  children?: ReactNode
  className?: string
}
export default function TableFooter({
  children,
  className,
  ...rest
}: TableFooterProps) {
  return (
    <tfoot
      className={classNames('table-footer-group', {
        [className || '']: className,
      })}
      {...rest}
    >
      {children}
    </tfoot>
  )
}
