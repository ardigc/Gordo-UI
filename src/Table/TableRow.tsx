import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type TableRowReactProps= DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>,HTMLTableRowElement>
export interface TableRowProps extends TableRowReactProps{
    children?: ReactNode
    className?: string
}
export default function TableRow({children, className}:TableRowProps) {
    return(
        <tr className={classNames({[className||'']:className})}>
           {children} 
        </tr>
    )
}