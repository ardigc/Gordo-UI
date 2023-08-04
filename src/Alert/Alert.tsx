import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type DivReactPops = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface AlertProps extends DivReactPops {
  children?: ReactNode
}
export default function Alert({ children }: AlertProps) {
  return <div>{children}</div>
}
