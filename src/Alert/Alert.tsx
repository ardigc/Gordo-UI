import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import Paper, { PaperProps } from '../Paper/Paper'
import classNames from 'classnames'

export interface AlertProps extends Omit<PaperProps, 'children'> {
  children?: ReactNode
  severity?: 'error' | 'info' | 'success' | 'warning'
}
export default function Alert({ children, severity = 'success' }: AlertProps) {
  return (
    <Paper
      className={classNames({ 'bg-green-200': severity === 'success' })}
      elevation={0}
    >
      <div className={classNames({ 'text-green-800': severity === 'success' })}>
        {children}
      </div>
    </Paper>
  )
}
