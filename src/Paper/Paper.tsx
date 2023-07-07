import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
type PaperReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface PaperProps extends PaperReactProps {
  children: ReactNode
}
export default function Paper({ children }: PaperProps) {
  return <div>{children}</div>
}
