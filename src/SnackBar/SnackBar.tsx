import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import Paper from '../Paper/Paper'

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
        'fixed bottom-2 left-2 right-2 z-50 flex justify-start items-center sm:bottom-6 sm:left-6 sm:right-auto'
      )}
      {...rest}
    >
      <Paper
        className={classNames(
          'font-base font-normal text-base text-white grow bg-[#323232] flex px-4 py-[6px] items-center flex-wrap sm:min-w-[288px] sm:grow-[initial]'
        )}
      >
        {message}
      </Paper>
    </div>
  )
}
