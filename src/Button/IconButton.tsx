import classNames from 'classnames'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useState,
} from 'react'
interface CommonProps {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  disableRipple?: boolean
  classes?: {
    buttonClassName?: string
    rippleSpanClassName?: string
  }
  // color?:
  // | 'primary'
  // | 'secondary'
  // | 'error'
  // | 'warning'
  // | 'info'
  // | 'success'
  // | 'inherit'
  disabled?: boolean
  edge?: 'end' | 'start' | false
  className?: string
}
type ButtonReactProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export interface ButtonPropsForButton extends CommonProps, ButtonReactProps {
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void
  href?: undefined
}
type AnchorReactProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>
export interface ButtonPropsForAnchor extends CommonProps, AnchorReactProps {
  href: string
  onClick?: (ev: MouseEvent<HTMLAnchorElement>) => void
}
// export interface IconButonProps {
//   children?: ReactNode
//   size?: 'small' | 'medium' | 'large'
//   disableRipple?: boolean
//   classes?: {
//     buttonClassName?: string
//     rippleSpanClassName?: string
//   }
//   // color?:
//   // | 'primary'
//   // | 'secondary'
//   // | 'error'
//   // | 'warning'
//   // | 'info'
//   // | 'success'
//   // | 'inherit'
//   disabled?: boolean
//   edge?: 'end' | 'start' | false
//   className?: string
//   href?: string
//   onClick?: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
// }

export default function IconButton({
  children,
  size = 'medium',
  onClick,
  href,
  disableRipple,
  // color='primary',
  disabled,
  edge,
  className,
  classes,
  ...rest
}: ButtonPropsForAnchor | ButtonPropsForButton) {
  const [animation, setAnimation] = useState(false)
  const [clickCoord, setClickCoord] = useState<{ x: number; y: number }>()
  // const isCustomcolor=color!==
  const RenderComponent = href ? 'a' : ('button' as ElementType)
  const onClickButtonHandler: MouseEventHandler<HTMLButtonElement> = (ev) => {
    if (href !== undefined) return

    const target = ev.currentTarget
    const location = target.getBoundingClientRect()
    const coord = {
      x: ev.clientX - location.left,
      y: ev.clientY - location.top,
    }
    setClickCoord({ x: coord.x, y: coord.y })
    if (!disableRipple) {
      setAnimation(true)
      setTimeout(() => {
        setAnimation(false)
      }, 600)
    }
    if (onClick) {
      onClick(ev)
    }
  }
  const onClickAnchorHandler: MouseEventHandler<HTMLAnchorElement> = (ev) => {
    if (!href) return

    const target = ev.currentTarget
    const location = target.getBoundingClientRect()
    const coord = {
      x: ev.clientX - location.left,
      y: ev.clientY - location.top,
    }
    setClickCoord({ x: coord.x, y: coord.y })
    if (!disableRipple) {
      setAnimation(true)
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
      onClick={href ? onClickAnchorHandler : onClickButtonHandler}
      className={classNames(
        'hover:rounded-full  inline-flex items-center  justify-center  relative overflow-hidden',
        {
          '-mr-3': edge === 'end',
          '-ml-3': edge === 'start',
          'p-2': size === 'medium',
          'p-[5px]': size === 'small',
          'p-3': size === 'large',
          'rounded-full': animation,
          'hover:transition-all hover:duration-200 hover:linear hover:bg-slate-200':
            !disabled,
          [className || '']: className,
          [classes?.buttonClassName || '']: classes?.buttonClassName,
        }
      )}
      {...rest}
    >
      {children}
      {animation && (
        <span
          style={{
            top: clickCoord?.y,
            left: clickCoord?.x,
            transform: 'translate(-50%, -50%)',
          }}
          className={classNames(
            'animate-ripple  absolute inline-flex w-full h-full bg-slate-400  rounded-full bg-opacity-25 origin-center',
            {
              [classes?.rippleSpanClassName || '']:
                classes?.rippleSpanClassName,
            }
          )}
        ></span>
      )}
    </RenderComponent>
  )
}
