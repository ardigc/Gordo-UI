import {ReactNode, useEffect, useState} from 'react'
import Popover from '../Popover/Popover'
import Clickaway from '../ClickAway/ClickAway'
export interface MenuProps{
    children?:ReactNode
    open: boolean
    anchorEl?: Element | (() => Element)
}
export default function Menu({children, open, anchorEl}:MenuProps) {
    const [opened, setOpen] = useState(false)
    useEffect(()=>{
        if (open) {
            setOpen(true)
        }

    },[open])
    return( 
    <Clickaway onClickaway={()=>setOpen(false)}>

  <Popover anchorEl={anchorEl} className='bg-white' open={opened}>
        <ul>
            {children}
        </ul>
    </Popover>
    </Clickaway>
    ) 
}