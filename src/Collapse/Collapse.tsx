import { ReactNode } from "react"

export interface CollapseProps{
    children:ReactNode
}
export default function Collapse({children}:CollapseProps) {
    return(<div>
{children}
    </div>)
}