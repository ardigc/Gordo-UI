import classNames from 'classnames'
import { ReactNode, useState, MouseEventHandler, MouseEvent } from 'react'

export interface ButtonProps {
  children?: ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  onClick?: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
  disabled?: boolean
  href?: string
}
export default function Button({
  children,
  variant = 'text',
  onClick,
  color = 'primary',
  disabled,
  href,
}: ButtonProps) {
  const [animation, setAnimation] = useState(false)
  const [clickCoord, setClickCoord] = useState<{ x: number; y: number }>()
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
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 600)
    if (onClick) {
      onClick(ev)
    }
  }
  return (
    <RenderComponent
      disabled={disabled}
      href={href}
      onClick={onClickHandler}
      className={classNames(
        'inline-flex items-center justify-center relative bg-transparent font-base  outline-none font-medium text-sm tracking-wide uppercase rounded-[4px] min-w-[64px]',
        'overflow-hidden',
        {
          ' hover:transition-all hover:duration-200 hover:linear hover:bg-opacity-10 py-[6px] px-2':
            variant === 'text' && !disabled,
          'text-primary-color hover:bg-primary-color':
            color === 'primary' && variant === 'text' && !disabled,
          'text-secundary-color hover:bg-secundary-color':
            color === 'secundary' && variant === 'text' && !disabled,
          'text-error-color hover:bg-error-color':
            color === 'error' && variant === 'text' && !disabled,
          'text-warning-color hover:bg-warning-color':
            color === 'warning' && variant === 'text' && !disabled,
          'text-info-color hover:bg-info-color':
            color === 'info' && variant === 'text' && !disabled,
          'text-success-color hover:bg-success-color':
            color === 'success' && variant === 'text' && !disabled,
          'text-gray-400': disabled,
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
    </RenderComponent>
  )
}
