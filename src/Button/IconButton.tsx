import classNames from "classnames";
import { MouseEvent, MouseEventHandler, ReactNode, useState } from "react";

export interface IconButonProps{
    children?: ReactNode
    size?:	'small'
    | 'medium'
    | 'large'
    onClick?: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    href?: string
disableRipple?:boolean
color?:
| 'primary'
| 'secondary'
| 'error'
| 'warning'
| 'info'
| 'success'
| 'inherit'

}

export default function IconButton({children, size='medium', onClick, href, disableRipple, color='primary'}:IconButonProps) {
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
    return(<RenderComponent onClick={onClickHandler} className={classNames('hover:rounded-full  inline-flex items-center  justify-center  relative overflow-hidden',{'p-2':size==='medium', 'p-[5px]': size==='small','p-3':size==='large', 'rounded-full':animation,'hover:transition-all hover:duration-200 hover:linear hover:bg-slate-200':true,})}>
        {children}
        {animation && (
        <span
          style={{
            top: clickCoord?.y,
            left: clickCoord?.x,
            transform: 'translate(-50%, -50%)',
          }}
          className={classNames(
            'animate-ripple  absolute inline-flex w-full h-full bg-slate-400  rounded-full bg-opacity-25 origin-center')}
            ></span>
      )}
    </RenderComponent>)
}