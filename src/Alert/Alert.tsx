import { ReactNode, MouseEvent, ElementType } from 'react'
import Paper, { PaperProps } from '../Paper/Paper'
import classNames from 'classnames'
import {
  ErrorIcon,
  SuccessIcon,
  WarningIcon,
  InfoIcon,
  XIcon,
} from '../components/icons/Icons'
import Button from '../Button/Button'

export interface AlertProps extends Omit<PaperProps, 'children' | 'variant'> {
  children?: ReactNode
  severity?: 'error' | 'info' | 'success' | 'warning'
  action?: ReactNode
  onClose?: (ev: MouseEvent<HTMLButtonElement>) => void
  variant?: 'filled' | 'outlined' | 'standard'
  className?: string
  classes?: {
    Paper?: string
    IconComponent?: string
    ChildrenComponent?: string
  }
  closeText?: string
  icon?: ReactNode
  iconMapping?: {
    error?: ReactNode
    info?: ReactNode
    success?: ReactNode
    warning?: ReactNode
  }
  slots?: { closeButton?: ElementType; closeIcon?: ElementType }
  slotProps?: { closeButton?: object; closeIcon?: object }
}
export function Alert({
  children,
  severity = 'success',
  action,
  onClose,
  variant = 'standard',
  className,
  classes,
  closeText = 'Close',
  icon,
  iconMapping,
  slots,
  slotProps,
  ...rest
}: AlertProps) {
  const warningAndNoIconFalse = severity === 'warning' && icon !== false
  const successAndNoIconFalse = severity === 'success' && icon !== false
  const errorAndNoIconFalse = severity === 'error' && icon !== false
  const infoAndNoIconFalse = severity === 'info' && icon !== false
  const RenderCloseButon = slots?.closeButton ? slots.closeButton : Button
  const RenderCloseIcon = slots?.closeIcon ? slots.closeIcon : XIcon
  return (
    <Paper
      className={classNames(
        'flex py-[6px] px-4 font-base text-sm font-normal items-center ',
        {
          'bg-green-100 text-success-color':
            severity === 'success' && variant === 'standard',
          'bg-yellow-100 text-warning-color':
            severity === 'warning' && variant === 'standard',
          'bg-red-100 text-error-color':
            severity === 'error' && variant === 'standard',
          'bg-blue-100 text-info-color':
            severity === 'info' && variant === 'standard',
          'border-success-color bg-white border text-success-color':
            severity === 'success' && variant === 'outlined',
          'border-warning-color bg-white border text-warning-color':
            severity === 'warning' && variant === 'outlined',
          'border-error-color border bg-white text-error-color':
            severity === 'error' && variant === 'outlined',
          'border-info-color border bg-white text-info-color':
            severity === 'info' && variant === 'outlined',
          'bg-success-color text-white':
            severity === 'success' && variant === 'filled',
          'bg-warning-color text-white':
            severity === 'warning' && variant === 'filled',
          'bg-error-color text-white':
            severity === 'error' && variant === 'filled',
          'bg-info-color text-white':
            severity === 'info' && variant === 'filled',
          [className || '']: className,
          [classes?.Paper || '']: classes?.Paper,
        }
      )}
      elevation={0}
      {...rest}
    >
      <div
        className={classNames('mr-[12px] py-[7px] flex opacity-90', {
          [classes?.IconComponent || '']: classes?.IconComponent,
        })}
      >
        {successAndNoIconFalse &&
          (iconMapping?.success ? (
            iconMapping.success
          ) : icon !== undefined ? (
            icon
          ) : (
            <SuccessIcon />
          ))}
        {warningAndNoIconFalse &&
          (iconMapping?.warning ? (
            iconMapping.warning
          ) : icon !== undefined ? (
            icon
          ) : (
            <WarningIcon />
          ))}
        {errorAndNoIconFalse &&
          (iconMapping?.error ? (
            iconMapping.error
          ) : icon !== undefined ? (
            icon
          ) : (
            <ErrorIcon />
          ))}
        {infoAndNoIconFalse &&
          (iconMapping?.info ? (
            iconMapping.info
          ) : icon !== undefined ? (
            icon
          ) : (
            <InfoIcon />
          ))}
      </div>
      <div
        className={classNames('py-2 min-w-0 overflow-auto text-inherit', {
          [classes?.ChildrenComponent || '']: classes?.ChildrenComponent,
        })}
      >
        {children}
      </div>
      {action && (
        <div className={classNames('ml-auto -mr-2 pl-4 ')}>{action}</div>
      )}
      {!action && onClose && (
        <div className={classNames('ml-auto -mr-2 pl-4 ')}>
          <RenderCloseButon
            className={classNames('rounded-full w-9 h-9  [div>&]:min-w-0', {
              '[div>&]:px-0 [div>&]:shadow-none': variant === 'filled',
            })}
            color={severity}
            variant={variant === 'filled' ? 'contained' : 'text'}
            title={closeText}
            onClick={(
              ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
            ) => onClose(ev)}
            {...slotProps?.closeButton}
          >
            <RenderCloseIcon {...slotProps?.closeIcon} />
          </RenderCloseButon>
        </div>
      )}
    </Paper>
  )
}
