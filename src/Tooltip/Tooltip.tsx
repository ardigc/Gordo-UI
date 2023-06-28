import React , { ElementType, JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, useEffect, useState } from 'react'
import Popover from '../Popover/Popover'
export interface TooltipProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}
export default function Tooltip({ children }: TooltipProps) {
  const [anchorEl, setAnchorEl]=useState<Element|undefined>(undefined)
  const [open, setOpen]=useState(false)
  const onMouseEnterHandler: MouseEventHandler<HTMLDivElement>=(ev)=>{
setAnchorEl(ev.currentTarget)
setOpen(true)
  }
  return <div className='inline-flex'>
    <Popover open={open} anchorOrigin={{vertical:'bottom', horizontal:'center'}}  anchorEl={anchorEl} classes={{root:'pointer-events-none'}}>
holiwi
    </Popover>
    <div onMouseEnter={onMouseEnterHandler} onMouseLeave={()=>setOpen(false)}>

{children}  
    </div>
</div>
}
