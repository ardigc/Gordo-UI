import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import Paper, { PaperProps } from '../Paper/Paper'

export interface AlertProps extends Omit<PaperProps, 'children'> {
  children?: ReactNode
}
export default function Alert({ children }: AlertProps) {
  return (
    <Paper>
      <div>{children}</div>
    </Paper>
  )
}
