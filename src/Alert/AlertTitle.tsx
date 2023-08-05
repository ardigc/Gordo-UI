import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface AlertTitleProps extends DivReactProps {
  children: ReactNode
}
export default function AlertTitle({ children, ...rest }: AlertTitleProps) {
  return (
    <div
      className={classNames(
        '-mt-[2px] mb-[5.6px] font-base font-medium text-base'
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
