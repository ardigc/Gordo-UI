import { DetailedHTMLProps, HTMLAttributes } from 'react'

type TableBodyReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>
export interface TableBodyProps extends TableBodyReactProps {}
export default function TableBody({}: TableBodyProps) {
  return <tbody></tbody>
}
