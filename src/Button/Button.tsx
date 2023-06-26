import classNames from 'classnames'
import { ReactNode, useState, MouseEventHandler, MouseEvent } from 'react'

export interface ButtonProps {
  children?: ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  onClick?: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'inherit'
  disabled?: boolean
  href?: string
  disableElevation?: boolean
  disableRipple?: boolean
  size?: 	'small'
  | 'medium'
  | 'large'
  startIcon?: ReactNode
  endIcon?: ReactNode
  className?: string
  classes?:{
    buttonClassName?:string
    rippleSpanClassName?:string
  }
}
export default function Button({
  children,
  variant = 'text',
  onClick,
  color = 'primary',
  disabled,
  href,
  disableElevation,
  disableRipple,
  size='medium',
  startIcon,
  endIcon,
  className,
  classes,
}: ButtonProps) {
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
  return (
    <RenderComponent
      disabled={disabled}
      href={href}
      onClick={onClickHandler}
      className={classNames(
        'inline-flex items-center  justify-center  relative font-base  outline-none font-medium text-sm tracking-wide uppercase rounded-[4px] min-w-[64px]',
        'overflow-hidden',
        {
          'py-[6px] px-2': size==='medium'&& variant==='text',
          'py-1 px-[5px]': size==='small'&& variant==='text',
          'py-2 px-[12px]': size==='large'&& variant==='text',
          'py-[5px] px-[15px]': size==='medium'&& variant==='outlined',
          'py-[3px] px-[9px]': size==='small'&& variant==='outlined',
          'py-[7px] px-[21px]': size==='large'&& variant==='outlined',
          'py-[6px] px-4': size==='medium'&& variant==='contained',
          'py-1 px-[10px]': size==='small'&& variant==='contained',
          'py-[8px] px-[22px]': size==='large'&& variant==='contained',
          ' hover:transition-all hover:duration-200 hover:linear  bg-transparent hover:bg-opacity-10 ':
            (variant === 'outlined' || variant === 'text') && !disabled,
          ' hover:transition-all hover:duration-200 hover:linear  hover:bg-opacity-10 ':
            variant === 'contained' && !disabled,
          'border-primary-color border text-primary-color hover:bg-primary-color':
            color === 'primary' && variant === 'outlined' && !disabled,
          'border-secondary-color border text-secondary-color hover:bg-secondary-color':
            color === 'secondary' && variant === 'outlined' && !disabled,
          'border-error-color border text-error-color hover:bg-error-color':
            color === 'error' && variant === 'outlined' && !disabled,
          'border-warning-color border text-warning-color hover:bg-warning-color':
            color === 'warning' && variant === 'outlined' && !disabled,
          'border-success-color border text-success-color hover:bg-success-color':
            color === 'success' && variant === 'outlined' && !disabled,
          'border-info-color border text-info-color hover:bg-info-color':
            color === 'info' && variant === 'outlined' && !disabled,
          'border-inherit border text-inherit hover:bg-inherit':
            color === 'inherit' && variant === 'outlined' && !disabled,
          'bg-primary-color text-white bg-opacity-90 hover:bg-opacity-100':
            color === 'primary' && variant === 'contained' && !disabled,
          'bg-secondary-color text-white bg-opacity-90 hover:bg-opacity-100':
            color === 'secondary' && variant === 'contained' && !disabled,
          'bg-error-color text-white bg-opacity-90 hover:bg-opacity-100':
            color === 'error' && variant === 'contained' && !disabled,
          'bg-warning-color text-white bg-opacity-90 hover:bg-opacity-100':
            color === 'warning' && variant === 'contained' && !disabled,
          'bg-success-color text-white bg-opacity-90 hover:bg-opacity-100':
            color === 'success' && variant === 'contained' && !disabled,
          'bg-info-color text-white bg-opacity-90 hover:bg-opacity-100':
            color === 'info' && variant === 'contained' && !disabled,
          'bg-inherit text-white bg-opacity-90 hover:bg-opacity-100':
            color === 'inherit' && variant === 'contained' && !disabled,
          'text-primary-color hover:bg-primary-color':
            color === 'primary' && variant === 'text' && !disabled,
          'text-secondary-color hover:bg-secondary-color':
            color === 'secondary' && variant === 'text' && !disabled,
          'text-error-color hover:bg-error-color':
            color === 'error' && variant === 'text' && !disabled,
          'text-warning-color hover:bg-warning-color':
            color === 'warning' && variant === 'text' && !disabled,
          'text-info-color hover:bg-info-color':
            color === 'info' && variant === 'text' && !disabled,
          'text-success-color hover:bg-success-color':
            color === 'success' && variant === 'text' && !disabled,
          'text-inherit hover:bg-inherit':
            color === 'inherit' && variant === 'text' && !disabled,
          'text-gray-400 py-[6px] px-2': disabled,
          'bg-gray-200': disabled && variant === 'contained',
          'border-gray-200 border': disabled && variant === 'outlined',
          'shadow shadow-black':
            variant === 'contained' && !disabled && !disableElevation,
            [className||'']:className,
            [classes?.buttonClassName||'']:classes?.buttonClassName,
        }
      )}
    >
      {startIcon&&<span className={classNames('mr-2 -ml-1')}>{startIcon}</span>}
      {children}
      {endIcon&& <span className={classNames('-mr-1 ml-2')}>{endIcon}</span>}
      {animation && (
        <span
          style={{
            top: clickCoord?.y,
            left: clickCoord?.x,
            transform: 'translate(-50%, -50%)',
          }}
          className={classNames({
            'animate-ripple absolute inline-flex w-full h-full   rounded-full bg-opacity-25 origin-center':
              variant === 'text' || variant === 'outlined',
            'bg-primary-color':
              (variant === 'outlined' || variant === 'text') &&
              color === 'primary',
            'bg-secondary-color':
              (variant === 'outlined' || variant === 'text') &&
              color === 'secondary',
            'bg-error-color':
              (variant === 'outlined' || variant === 'text') &&
              color === 'error',
            'bg-warning-color':
              (variant === 'outlined' || variant === 'text') &&
              color === 'warning',
            'bg-info-color':
              (variant === 'outlined' || variant === 'text') &&
              color === 'info',
            'bg-success-color':
              (variant === 'outlined' || variant === 'text') &&
              color === 'success',
            'bg-inherit':
              (variant === 'outlined' || variant === 'text') &&
              color === 'inherit',
            'animate-ripple absolute inline-flex w-full h-full  bg-white rounded-full bg-opacity-25 origin-center':
              variant === 'contained',
              [classes?.rippleSpanClassName||'']:classes?.rippleSpanClassName
          })}
        ></span>
      )}
    </RenderComponent>
  )
}
