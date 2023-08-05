import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type DivReactPops = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface SnackBarPops extends DivReactPops {
  children?: ReactNode
}

export default function SnackBar({ children }: SnackBarPops) {
  return <div>{children}</div>
}
