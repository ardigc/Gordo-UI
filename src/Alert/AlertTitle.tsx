import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface AlertTitleProps extends DivReactProps {
  children: ReactNode
}
export default function AlertTitle({ children, ...rest }: AlertTitleProps) {
  return <div {...rest}>{children}</div>
}
