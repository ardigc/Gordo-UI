import classNames from 'classnames'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from 'react'
import Clickaway from '../ClickAway/ClickAway'
import { ElementType, ReactNode } from 'react'

interface InputProps {
  autocomplete?: string
  id?: string
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
  autoFocus?: boolean
  className?: 'string'
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
  value?: string | ReadonlyArray<string> | number | undefined
  placeholder?: string | undefined
  readonly?: boolean
  required?: boolean
  type?: HTMLInputTypeAttribute
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
  className,
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
          [className || '']: className,
          'hover:before:border-t-2 before:border-black after:border-b-2 before:border-t':
            !disaledUndeline,
          'w-full': fullWidth,
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
            {startAdornment && startAdornment}
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
              className={classNames('outline-none', {
                'w-full': fullWidth,
                [classes?.inputClassName || '']: classes?.inputClassName,
              })}
              onFocus={() => {
                setTouched(true)
              }}
              readOnly={readonly}
              disabled={disabled}
              {...inputProps}
            />
            {endAdornment && endAdornment}
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
            }}
            disabled={disabled}
            {...inputProps}
          />
        )}
      </RenderComponent>
    </Clickaway>
  )
}
