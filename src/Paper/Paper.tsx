import { DetailedHTMLProps, HTMLAttributes } from 'react'
type PaperReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface PaperProps extends PaperReactProps {}
export default function Paper({}: PaperProps) {
  return <div></div>
}
