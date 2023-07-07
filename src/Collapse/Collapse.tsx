import classNames from "classnames"
import React, { JSXElementConstructor, ReactElement, ReactNode, useEffect, useRef } from "react"

export interface CollapseProps{
    children: ReactElement<any, string | JSXElementConstructor<any>>    
    open?:boolean
    className?:string
}
export default function Collapse({children, open, className }:CollapseProps) {
    const childrenRef=useRef<HTMLElement>(null)
    useEffect(()=>{
      console.log(  childrenRef.current?.offsetWidth)
    })
    return(<div className={classNames('transition-all',{'h-auto min-h-0  overflow-visible':open, 'h-0 min-h-0 overflow-hidden ':!open})}>
{/* {children} */}
<>{React.cloneElement(children, { ref: childrenRef })}</>
    </div>)
}