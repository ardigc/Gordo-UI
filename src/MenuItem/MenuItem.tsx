import classNames from 'classnames'
import { MouseEventHandler, ReactNode, useState } from 'react'
export interface MenuItemProps {
  children: ReactNode
}
export default function MenuItem({ children }: MenuItemProps) {
  const [animation, setAnimation] = useState(false)

  const [clickCoord, setClickCoord] = useState<{ x: number; y: number }>()
  const onClickHandler: MouseEventHandler<HTMLLIElement> = (ev) => {
    const target = ev.currentTarget
    const location = target.getBoundingClientRect()
    const coord = {
      x: ev.clientX - location.left,
      y: ev.clientY - location.top,
    }
    setClickCoord({ x: coord.x, y: coord.y })
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 600)
  }
  return (
    <li
      className={classNames(
        'flex font-normal text-base font-base bg-transparent justify-start py-[6px] px-4 hover:bg-neutral-50 relative'
      )}
      onClick={onClickHandler}
    >
      {children}
      <span className={classNames('inset-0 overflow-hidden absolute')}>
        {animation && (
          <span
            style={{
              top: clickCoord?.y,
              left: clickCoord?.x,
              transform: 'translate(-50%, -50%)',
            }}
            className={classNames({
              'animate-ripple absolute inline-flex w-full h-full   rounded-full bg-opacity-25 origin-center bg-neutral-300':
                true,
            })}
          ></span>
        )}
      </span>
    </li>
  )
}
