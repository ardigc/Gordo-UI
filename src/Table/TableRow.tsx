import classNames from "classnames"
import { DetailedHTMLProps, ElementType, HTMLAttributes, ReactNode } from "react"

type TableRowReactProps= DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>,HTMLTableRowElement>
export interface TableRowProps extends TableRowReactProps{
    children?: ReactNode
    className?: string
    component?: ElementType
}
export default function TableRow({children, className, component}:TableRowProps) {
   const RenderComponent= component?component:'tr'
    return(
        <RenderComponent className={classNames({[className||'']:className})}>
           {children} 
        </RenderComponent>
    )
}