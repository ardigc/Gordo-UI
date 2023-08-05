import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface SnackBarProps extends DivReactProps {
  children?: ReactNode
  message?: ReactNode
}

export default function SnackBar({
  children,
  message,
  ...rest
}: SnackBarProps) {
  return (
    <div
      className={classNames(
        'fixed bottom-6 left-6 right-auto z-50 flex justify-start items-center'
      )}
      {...rest}
    >
      {message}
    </div>
  )
}
