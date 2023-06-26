import classNames from "classnames";
import { ReactNode } from "react";

export interface IconButonProps{
    children?: ReactNode
    size?:	'small'
    | 'medium'
    | 'large'
}
export default function IconButton({children, size='medium'}:IconButonProps) {
    
    return(<button className={classNames({'p-2':size==='medium', 'p-[5px]': size==='small','p-3':size==='large'})}>
        {children}
    </button>)
}