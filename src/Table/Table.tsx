import classNames from 'classnames'
import { DetailedHTMLProps, TableHTMLAttributes, ReactNode } from 'react'
type TableReactPops = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>
export interface TableProps extends TableReactPops {
  children: ReactNode
}
export default function Table({ children }: TableProps) {
  return (
    <table
      className={classNames('table w-full border-collapse border-spacing-0')}
    >
      {children}
    </table>
  )
}
