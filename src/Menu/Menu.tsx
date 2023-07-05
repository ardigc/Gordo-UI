import {ReactNode, useEffect} from 'react'
import Popover from '../Popover/Popover'
import Clickaway from '../ClickAway/ClickAway'
import MenuList from '../MenuList/MenuList'
import classNames from 'classnames'
export interface MenuProps{
    children?:ReactNode
    open: boolean
    anchorEl?: Element | (() => Element)
    onClose?: ()=>void
    classes?:{Popover?:string, MenuList: string}
}
export default function Menu({children, open, anchorEl ,onClose, classes}:MenuProps) {
 const clickAwayHandler=()=>{
    if (onClose) {
        
        onClose()
    }
 }
    return( 

  <Popover anchorEl={anchorEl} c anchorOrigin={{vertical:'bottom', horizontal:'left'}} onClose={clickAwayHandler} className={classNames('bg-white', {[classes?.Popover||'']:classes?.Popover})} open={open}>
        <MenuList className={classNames({[classes?.MenuList||'']:classes?.MenuList})}>
            {children}
        </MenuList>
    </Popover>
    ) 
}