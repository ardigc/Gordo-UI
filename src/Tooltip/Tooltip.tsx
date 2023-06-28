import React , { ElementType, JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from 'react'
import Popover from '../Popover/Popover'
export interface TooltipProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}
export default function Tooltip({ children }: TooltipProps) {
  return <div>
    <Popover />
    <div onMouseEnter={}>

{children}  
    </div>
</div>
}
