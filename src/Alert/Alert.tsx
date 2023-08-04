import { ReactNode, MouseEvent } from 'react'
import Paper, { PaperProps } from '../Paper/Paper'
import classNames from 'classnames'
import {
  ErrorIcon,
  SuccessIcon,
  WarningIcon,
  InfoIcon,
  XIcon,
} from '../components/icons/Icons'
import IconButton from '../Button/IconButton'
import Button from '../Button/Button'

export interface AlertProps extends Omit<PaperProps, 'children'> {
  children?: ReactNode
  severity?: 'error' | 'info' | 'success' | 'warning'
  action?: ReactNode
  onClose?: (ev: MouseEvent<HTMLButtonElement>) => void
}
export default function Alert({
  children,
  severity = 'success',
  action,
  onClose,
}: AlertProps) {
  return (
    <Paper
      className={classNames(
        'flex py-[6px] px-4 font-base text-sm font-normal items-center',
        {
          'bg-green-100 text-success-color': severity === 'success',
          'bg-yellow-100 text-warning-color': severity === 'warning',
          'bg-red-100 text-error-color': severity === 'error',
          'bg-blue-100 text-info-color': severity === 'info',
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
          'text-success-color': severity === 'success',
          'text-warning-color': severity === 'warning',
          'text-error-color': severity === 'error',
          'text-info-color': severity === 'info',
        })}
      >
        {children}
      </div>
      {action && (
        <div className={classNames('ml-auto -mr-2 pl-4 ')}>{action}</div>
      )}
      {!action && onClose && (
        <div className={classNames('ml-auto -mr-2 pl-4 ')}>
          <Button
            className="rounded-full w-9 h-9 min-w-0"
            color={severity}
            onClick={(ev) => onClose(ev)}
          >
            <XIcon />
          </Button>
        </div>
      )}
    </Paper>
  )
}
