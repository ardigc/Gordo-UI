import { DetailedHTMLProps, HTMLAttributes } from "react"

type UlReactProps= DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
export interface MenuListProps extends UlReactProps{

}
export default function MenuList({...rest}:MenuListProps) {
    return (<ul {...rest}>
        
    </ul>)
    
}