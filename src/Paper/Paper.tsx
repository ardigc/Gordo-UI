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
}
export default function Paper({
  children,
  className,
  component,
  elevation = 4,
  square,
}: PaperProps) {
  return (
    <div
      className={classNames('bg-white ', {
        rounded: !square,
        'shadow-1': elevation === 1,
        'shadow-2': elevation === 2,
        'shadow-3': elevation === 3,
        'shadow-4': elevation === 4,
        'shadow-5': elevation === 5,
        'shadow-6': elevation === 6,
        'shadow-7': elevation === 7,
        'shadow-8': elevation === 8,
        'shadow-9': elevation === 9,
        'shadow-10': elevation === 10,
        'shadow-11': elevation === 11,
        'shadow-12': elevation === 12,
        'shadow-13': elevation === 13,
        'shadow-14': elevation === 14,
        [className || '']: className,
      })}
    >
      {children}
    </div>
  )
}
