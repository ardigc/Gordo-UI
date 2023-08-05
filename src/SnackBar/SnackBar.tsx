import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface SnackBarProps extends DivReactProps {
  children?: ReactNode
}

export default function SnackBar({ children }: SnackBarProps) {
  return <div>{children}</div>
}
