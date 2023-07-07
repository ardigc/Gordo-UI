import classNames from "classnames"
import { ReactNode } from "react"

export interface CollapseProps{
    children:ReactNode
    in?:boolean
    className?:string
}
export default function Collapse({children, in, className }:CollapseProps) {
    return(<div className={classNames()}>
{children}
    </div>)
}