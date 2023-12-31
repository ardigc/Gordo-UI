import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  LiHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useState,
} from 'react'

type LiReactProps = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>
export interface MenuItemProps extends LiReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
  dense?: boolean
  disableGutters?: boolean
  divider?: boolean
  onClick?: (ev: MouseEvent<HTMLLIElement>) => void
  selected?: boolean
}
export function MenuItem({
  children,
  className,
  component,
  dense,
  disableGutters,
  divider,
  onClick,
  selected,
  ...rest
}: MenuItemProps) {
  const [animation, setAnimation] = useState(false)
  const [clickCoord, setClickCoord] = useState<{ x: number; y: number }>()
  const CustomComponent = component ? component : 'li'
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
    if (onClick) {
      setTimeout(() => {
        onClick(ev)
      }, 200)
    }
  }
  return (
    <CustomComponent
      {...rest}
      className={classNames(
        'flex font-normal text-base font-base bg-transparent justify-start  hover:bg-neutral-50 relative',

        {
          'py-[6px]': !dense && !disableGutters,
          'bg-sky-50': selected,
          'px-4': !disableGutters,
          'border-b': divider,
          [className || '']: className,
        }
      )}
      onClick={onClickHandler}
      tabIndex={selected ? 0 : -1}
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
              'animate-ripple absolute inline-flex w-full h-full   rounded-full bg-opacity-25 origin-center bg-neutral-500':
                true,
            })}
          ></span>
        )}
      </span>
    </CustomComponent>
  )
}
