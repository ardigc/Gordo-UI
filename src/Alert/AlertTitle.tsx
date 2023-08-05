import { DetailedHTMLProps, HTMLAttributes } from 'react'

type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface AlertTitleProps extends DivReactProps {}
export default function AlertTitle({}: AlertTitleProps) {
  return <div></div>
}
