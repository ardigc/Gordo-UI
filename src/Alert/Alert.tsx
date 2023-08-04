import { ReactNode } from 'react'
import Paper, { PaperProps } from '../Paper/Paper'
import classNames from 'classnames'
import {
  ErrorIcon,
  SuccessIcon,
  WarningIcon,
  InfoIcon,
} from '../components/icons/Icons'

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
          'bg-green-100 text-green-800': severity === 'success',
          'bg-yellow-100 text-yellow-800': severity === 'warning',
          'bg-red-100 text-red-800': severity === 'error',
          'bg-blue-100 text-blue-800': severity === 'info',
        }
      )}
      elevation={0}
    >
      <div className={classNames('mr-[12px] py-[7px] flex opacity-90')}>
        {severity === 'success' && <SuccessIcon />}
        {severity === 'warning' && <WarningIcon />}
        {severity === 'error' && <ErrorIcon />}
        {severity === 'info' && <InfoIcon />}
      </div>
      <div
        className={classNames('py-2 min-w-0 overflow-auto', {
          'text-green-800': severity === 'success',
          'text-yellow-800': severity === 'warning',
          'text-red-800': severity === 'error',
          'text-blue-800': severity === 'info',
        })}
      >
        {children}
      </div>
    </Paper>
  )
}
