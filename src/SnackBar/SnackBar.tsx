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
  return <div {...rest}>{message}</div>
}
