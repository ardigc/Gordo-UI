import classNames from "classnames"
import React, { ElementType, JSXElementConstructor, ReactElement, ReactNode, useEffect, useRef, useState } from "react"

export interface CollapseProps{
    children: ReactElement<any, string | JSXElementConstructor<any>>    
    open?:boolean
    className?:string
    collapsedSize?: number|string
    component?: ElementType
}
export default function Collapse({children, open, className, collapsedSize, component}:CollapseProps) {
    const childrenRef=useRef<HTMLElement>(null)
    const [childrenHeight, setChildrenHeight] = useState(0)
    useEffect(()=>{
        if (childrenRef.current?.offsetHeight) {
            
            setChildrenHeight(  childrenRef.current?.offsetHeight)
        }
    },[open])
const RenderComponent= component?component:'div'
    return(<div style={{height:open?childrenHeight:collapsedSize? collapsedSize:0}} className={classNames('transition-all duration-300 overflow-hidden',{' min-h-0  ':open, 'min-h-0 ':!open})}>
{/* {children} */}
<>{React.cloneElement(children, { ref: childrenRef })}</>
    </div>)
}