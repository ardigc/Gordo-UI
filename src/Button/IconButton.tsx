import classNames from "classnames";
import { MouseEvent, MouseEventHandler, ReactNode, useState } from "react";

export interface IconButonProps{
    children?: ReactNode
    size?:	'small'
    | 'medium'
    | 'large'
    onClick?: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    href?: string


}

export default function IconButton({children, size='medium', onClick, href}:IconButonProps) {
    const [animation, setAnimation] = useState(false)
    const [clickCoord, setClickCoord] = useState<{ x: number; y: number }>()
    // const isCustomcolor=color!==
    const RenderComponent = href ? 'a' : 'button'
    const onClickHandler: MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (ev) => {
    const target = ev.currentTarget
    const location = target.getBoundingClientRect()
    const coord = {
      x: ev.clientX - location.left,
      y: ev.clientY - location.top,
    }
    setClickCoord({ x: coord.x, y: coord.y })
    if(!disableRipple){setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 600)
  }
  if (onClick) {
    onClick(ev)
  }
  }
    return(<button onClick={onClickHandler} className={classNames({'p-2':size==='medium', 'p-[5px]': size==='small','p-3':size==='large'})}>
        {children}
    </button>)
}