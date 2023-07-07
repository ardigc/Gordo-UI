import classNames from "classnames"
import { ReactNode } from "react"

export interface CollapseProps{
    children:ReactNode
    open?:boolean
    className?:string
}
export default function Collapse({children, open, className }:CollapseProps) {
    return(<div className={classNames({'h-auto min-h-0  overflow-visible':open, 'h-0 min-h-0 overflow-hidden hidden':!open})}>
{children}
    </div>)
}