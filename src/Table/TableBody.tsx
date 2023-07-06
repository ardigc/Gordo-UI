import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type TableBodyReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>
export interface TableBodyProps extends TableBodyReactProps {
  children?: ReactNode
}
export default function TableBody({ children, ...rest }: TableBodyProps) {
  return <tbody {...rest}>{children}</tbody>
}
