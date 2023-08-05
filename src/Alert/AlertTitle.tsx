import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface AlertTitleProps extends DivReactProps {
  children: ReactNode
  className?: string
}
export default function AlertTitle({
  children,
  className,
  ...rest
}: AlertTitleProps) {
  return (
    <div
      className={classNames(
        '-mt-[2px] mb-[5.6px] font-base font-medium text-base',
        { [className || '']: className }
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
