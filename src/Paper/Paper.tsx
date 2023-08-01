import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react'
type PaperReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface PaperProps extends PaperReactProps {
  children: ReactNode
  className?: string
  component?: ElementType
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
  square?: boolean
  variant?: 'elevation' | 'outlined'
}
export default function Paper({
  children,
  className,
  component,
  elevation = 4,
  square,
  variant = 'elevation',
  ...rest
}: PaperProps) {
  const RenderComponent = component ? component : 'div'
  return (
    <RenderComponent
      className={classNames('bg-white w-full overflow-auto', {
        rounded: !square,
        'shadow-1': elevation === 1 && variant === 'elevation',
        'shadow-2': elevation === 2 && variant === 'elevation',
        'shadow-3': elevation === 3 && variant === 'elevation',
        'shadow-4': elevation === 4 && variant === 'elevation',
        'shadow-5': elevation === 5 && variant === 'elevation',
        'shadow-6': elevation === 6 && variant === 'elevation',
        'shadow-7': elevation === 7 && variant === 'elevation',
        'shadow-8': elevation === 8 && variant === 'elevation',
        'shadow-9': elevation === 9 && variant === 'elevation',
        'shadow-10': elevation === 10 && variant === 'elevation',
        'shadow-11': elevation === 11 && variant === 'elevation',
        'shadow-12': elevation === 12 && variant === 'elevation',
        'shadow-13': elevation === 13 && variant === 'elevation',
        'shadow-14': elevation === 14 && variant === 'elevation',
        'border border-neutral-400': variant === 'outlined',
        [className || '']: className,
      })}
      {...rest}
    >
      {children}
    </RenderComponent>
  )
}
