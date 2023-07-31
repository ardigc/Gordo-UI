import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type TableFooterReactProps=DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>,HTMLTableSectionElement>
export interface TableFooterProps extends TableFooterReactProps{
    children?: ReactNode
}
export default function TableFooter(params:TableFooterProps) {
    return(<tfoot>
        {children}
    </tfoot>)
}