import {ReactNode} from 'react'
import Popover from '../Popover/Popover'
export interface MenuProps{
    children?:ReactNode
    open: boolean
    anchorEl?: Element | (() => Element)
}
export default function Menu({children, open, anchorEl}:MenuProps) {
  return( 
  <Popover anchorEl={anchorEl} className='bg-white' open={open}>
        <ul>
            {children}
        </ul>
    </Popover>
    ) 
}