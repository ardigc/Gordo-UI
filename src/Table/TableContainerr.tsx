import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type TableContainerReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface TableContainerPops extends TableContainerReactProps {
  children: ReactNode
}
export default function TableContainer({ children }: TableContainerPops) {
  return <div>{children}</div>
}
