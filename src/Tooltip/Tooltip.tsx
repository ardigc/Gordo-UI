import React , { ElementType, JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from 'react'
import Popover from '../Popover/Popover'
export interface TooltipProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}
export default function Tooltip({ children }: TooltipProps) {
  const [open, setOpen]=useState(false)
  return <div>
    <Popover open={open} classes={{root:'pointer-event-none'}}>

    </Popover>
    <div onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>

{children}  
    </div>
</div>
}
