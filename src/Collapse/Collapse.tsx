import classNames from "classnames"
import React, { JSXElementConstructor, ReactElement, ReactNode, useEffect, useRef, useState } from "react"

export interface CollapseProps{
    children: ReactElement<any, string | JSXElementConstructor<any>>    
    open?:boolean
    className?:string
}
export default function Collapse({children, open, className }:CollapseProps) {
    const childrenRef=useRef<HTMLElement>(null)
    const [childrenHeight, setChildrenHeight] = useState(0)
    useEffect(()=>{
        if (childrenRef.current?.offsetHeight) {
            
            setChildrenHeight(  childrenRef.current?.offsetHeight)
        }
    },[open])
    return(<div style={{height:open?childrenHeight:0}} className={classNames('transition-all duration-300 overflow-hidden',{' min-h-0  ':open, 'min-h-0 ':!open})}>
{/* {children} */}
<>{React.cloneElement(children, { ref: childrenRef })}</>
    </div>)
}