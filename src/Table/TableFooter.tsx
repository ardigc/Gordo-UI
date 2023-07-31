import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type TableFooterReactProps=DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>,HTMLTableSectionElement>
export interface TableFooterProps extends TableFooterReactProps{
    children?: ReactNode
}
export default function TableFooter({children,...rest}:TableFooterProps) {
    return(<tfoot className={classNames('table-footer-group')} {...rest}>
        {children}
    </tfoot>)
}