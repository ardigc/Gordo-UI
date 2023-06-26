import classNames from "classnames";
import { ReactNode } from "react";

export interface IconButonProps{
    children?: ReactNode
    size?:	'small'
    | 'medium'
    | 'large'
}
export default function IconButton({children}:IconButonProps) {
    
    return(<button className={classNames({})}>
        {children}
    </button>)
}