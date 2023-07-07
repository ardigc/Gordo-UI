import classNames from "classnames"
import { ReactNode } from "react"

export interface CollapseProps{
    children:ReactNode
    open?:boolean
    className?:string
}
export default function Collapse({children, open, className }:CollapseProps) {
    return(<div className={classNames({'h-auto':open===true, 'h-0':open===false})}>
{children}
    </div>)
}