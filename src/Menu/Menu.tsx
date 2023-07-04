import {ReactNode} from 'react'
import Popover from '../Popover/Popover'
export interface MenuProps{
    children:ReactNode
    open: boolean
}
export default function Menu({children, open}:MenuProps) {
    <Popover open={open}>
        <ul>
            {children}
        </ul>
    </Popover>
}