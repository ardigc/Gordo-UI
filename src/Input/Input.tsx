import classNames from 'classnames'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from 'react'
import Clickaway from '../ClickAway/ClickAway'
import { ElementType, ReactNode } from 'react'

export interface InputProps {
  autocomplete?: string
  id?: string
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
  autoFocus?: boolean
  className?: string
  classes?: {
    constainerClassName?: string
    inputClassName?: string
  }
  components?: {
    Input?: ElementType
    Container?: ElementType
  }
  componentsProps?: {
    container?: React.HTMLAttributes<HTMLElement>
    input?: React.InputHTMLAttributes<HTMLInputElement>
  }
  defaultValue?: string | number | ReadonlyArray<string> | undefined
  disabled?: boolean
  disaledUndeline?: boolean
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  error?: boolean
  inputComponent?: ElementType
  inputProps?: object
  fullWidth?: boolean
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined
  margin?: 'dense' | 'none'
  multiline?: boolean
  multilineTextAreaRef?: React.LegacyRef<HTMLTextAreaElement> | undefined
  rows?: number | string
  name?: string
  onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: () => void
  value?: string | ReadonlyArray<string> | number | undefined
  placeholder?: string | undefined
  readonly?: boolean
  required?: boolean
  type?: HTMLInputTypeAttribute
  variant?: 'filled' | 'outlined' | 'standard'
  size?: 'medium' | 'small'
}
export default function Input({
  autocomplete,
  autoFocus,
  id,
  error,
  color = error ? 'error' : 'primary',
  classes,
  components,
  componentsProps,
  defaultValue,
  disabled,
  disaledUndeline,
  endAdornment,
  inputComponent,
  inputProps,
  fullWidth,
  margin,
  multiline,
  inputRef,
  multilineTextAreaRef,
  rows,
  startAdornment,
  name,
  value,
  placeholder,
  readonly,
  required,
  type,
  onChange,
  onFocus,
  className,
  variant,
  size,
}: InputProps) {
  const [touched, setTouched] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)
  const UserInput = components?.Input || inputComponent
  const UserComponent = components?.Container
  const RenderComponent = UserComponent ? UserComponent : 'div'
  const RenderComponentProps = UserComponent
    ? { ...componentsProps?.container }
    : {
        className: classNames('input-custom inline-flex flex relative ', {
          'hover:before:border-t-2 before:border-black after:border-b-2 before:border-t':
            !disaledUndeline && !disabled,
          'w-full': fullWidth,
          'bg-gray-100 rounded-t-sm': variant === 'filled',
          'pr-3 pl-3': variant === 'filled',
          'mt-2 mb-1': margin === 'dense',

          'after:border-b-primary-color': color === 'primary',
          'after:border-b-secundary-color': color === 'secundary',
          'after:border-b-error-color': color === 'error',
          'after:border-b-warning-color': color === 'warning',
          'after:border-b-info-color': color === 'info',
          'after:border-b-success-color': color === 'success',
          'input-custom-none ': !touched,
          'input-custom-normal': touched,
          [classes?.constainerClassName || '']: classes?.constainerClassName,
          [className || '']: className,
        }),
      }
  const changeHandler: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (ev) => {
    setCurrentValue(ev.currentTarget.value)
    if (onChange) {
      onChange(ev)
    }
  }
  const parseRows = (rows: string | number | undefined) => {
    if (!rows) return
    if (typeof rows === 'number') {
      return rows
    }
    if (typeof rows === 'string') {
      return parseInt(rows)
    }
  }
  const renderMyInput = !multiline && !UserInput ? true : false
  console.log(renderMyInput)
  return (
    <Clickaway onClickaway={() => setTouched(false)}>
      <RenderComponent {...RenderComponentProps}>
        {renderMyInput && (
          <>
            {startAdornment && (
              <div
                className={classNames('flex items-center pl-3', {
                  'mt-4': variant === 'filled',
                })}
              >
                {startAdornment}
              </div>
            )}
            <input
              name={name}
              required={required}
              ref={inputRef}
              type={type}
              defaultValue={defaultValue}
              id={id}
              autoComplete={autocomplete}
              onChange={changeHandler}
              value={currentValue}
              autoFocus={autoFocus}
              placeholder={placeholder}
              className={classNames('outline-none ', {
                'w-full': fullWidth,
                'pt-6 pb-2': size === 'medium' && variant === 'filled',
                'pt-5 pb-1': size === 'small' && variant === 'filled',

                'pt-1 pb-[5px]': size === 'medium' && variant === 'standard',
                'pt-[1px] pb-[5px]': size === 'small' && variant === 'standard',
                [classes?.inputClassName || '']: classes?.inputClassName,
                // [className || '']: className,
              })}
              onFocus={() => {
                setTouched(true)
                if (onFocus) {
                  onFocus()
                }
              }}
              readOnly={readonly}
              disabled={disabled}
              {...inputProps}
            />
            {endAdornment && (
              <div className={classNames('flex items-center pr-3')}>
                {endAdornment}
              </div>
            )}
          </>
        )}

        {UserInput && <UserInput {...inputProps} {...componentsProps?.input} />}
        {multiline && (
          <textarea
            ref={multilineTextAreaRef}
            defaultValue={defaultValue}
            name={name}
            id={id}
            rows={parseRows(rows)}
            autoComplete={autocomplete}
            autoFocus={autoFocus}
            onChange={changeHandler}
            value={currentValue}
            placeholder={placeholder}
            readOnly={readonly}
            required={required}
            className={classNames('outline-none resize-none', {
              'w-full': fullWidth,
              [classes?.inputClassName || '']: classes?.inputClassName,
            })}
            onFocus={() => {
              setTouched(true)
              if (onFocus) {
                onFocus()
              }
            }}
            disabled={disabled}
            {...inputProps}
          />
        )}
      </RenderComponent>
    </Clickaway>
  )
}
