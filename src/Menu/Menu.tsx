import {ReactNode, useEffect} from 'react'
import Popover from '../Popover/Popover'
import Clickaway from '../ClickAway/ClickAway'
import MenuList from '../MenuList/MenuList'
export interface MenuProps{
    children?:ReactNode
    open: boolean
    anchorEl?: Element | (() => Element)
    onClose?: ()=>void
}
export default function Menu({children, open, anchorEl ,onClose}:MenuProps) {
 const clickAwayHandler=()=>{
    if (onClose) {
        
        onClose()
    }
 }
    return( 

  <Popover anchorEl={anchorEl} anchorOrigin={{vertical:'bottom', horizontal:'left'}} onClose={clickAwayHandler} className='bg-white' open={open}>
        <MenuList>
            {children}
        </MenuList>
    </Popover>
    ) 
}