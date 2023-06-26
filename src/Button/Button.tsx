import classNames from 'classnames'
import { ReactNode, useState, MouseEventHandler } from 'react'

export interface ButtonProps {
  children?: ReactNode
  variant?: 'contained' | 'outlined' | 'text'
}
export default function Button({ children, variant = 'text' }: ButtonProps) {
  const [animation, setAnimation] = useState(false)
  const [clickCoord, setClickCoord] = useState<{ x: number; y: number }>()
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (ev) => {
    const target = ev.currentTarget
    const location = target.getBoundingClientRect()
    const coord = {
      x: ev.clientX - location.left,
      y: ev.clientY - location.top,
    }
    setClickCoord({ x: coord.x, y: coord.y })
    console.log(coord)
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 600)
  }
  return (
    <button
      onClick={onClickHandler}
      className={classNames(
        'inline-flex items-center justify-center relative bg-transparent outline-none uppercase rounded-[4px] min-w-[64px]',
        'overflow-hidden',
        {
          ' hover:bg-primary-color hover:bg-opacity-10 py-[6px] px-2':
            variant === 'text',
        }
      )}
    >
      {animation && (
        <span
          style={{
            top: clickCoord?.y,
            left: clickCoord?.x,
            transform: 'translate(-50%, -50%)',
          }}
          className={classNames(
            'animate-ripple absolute inline-flex w-full h-full  bg-primary-color rounded-full bg-opacity-25 origin-center'
          )}
        ></span>
      )}
      {children}
    </button>
  )
}
