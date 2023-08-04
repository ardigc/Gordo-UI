import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import Paper, { PaperProps } from '../Paper/Paper'
import classNames from 'classnames'
import { SuccessIcon } from '../components/icons/Icons'

export interface AlertProps extends Omit<PaperProps, 'children'> {
  children?: ReactNode
  severity?: 'error' | 'info' | 'success' | 'warning'
}
export default function Alert({ children, severity = 'success' }: AlertProps) {
  return (
    <Paper
      className={classNames(
        'flex py-[6px] px-4 font-base text-sm font-normal',
        {
          'bg-green-200 text-green-800': severity === 'success',
        }
      )}
      elevation={0}
    >
      {severity === 'success' && <SuccessIcon />}
      <div className={classNames({ 'text-green-800': severity === 'success' })}>
        {children}
      </div>
    </Paper>
  )
}
