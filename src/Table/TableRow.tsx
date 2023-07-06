import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type TableRowReactProps= DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>,HTMLTableRowElement>
export interface TableRowProps extends TableRowReactProps{
    children?: ReactNode
}
export default function TableRow({children}:TableRowProps) {
    return(
        <tr>
           {children} 
        </tr>
    )
}