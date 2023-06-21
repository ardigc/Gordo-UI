import {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
  useState,
} from 'react'
import classNames from 'classnames'
import { primary } from './AutoComplete.stories'

export interface TextField {
  label?: string
  variant?: 'filled'
  classes?: {
    labelClassName?: string
    inputContainerClassName?: string
    inputClassName?: string
  }
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
  id?: string
  type?: HTMLInputTypeAttribute
  value?: string | ReadonlyArray<string> | number | undefined
  autoFocus?: boolean
  defaultValue?: string | number | ReadonlyArray<string> | undefined
  disabled?: boolean | undefined
  error?: boolean | undefined
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
  disableUnderline?: boolean | undefined
  select?: boolean
  children?: ReactNode
  readOnly?: boolean
  hiddenLabel?: boolean | undefined
  inputProps?: {}
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined
  required?: boolean
  helperText?: string | undefined
}
export default function TextField({
  label,
  variant,
  error,
  color = error ? 'error' : 'primary',
  defaultValue,
  disabled,
  inputRef,
  autoFocus = false,
  id,
  value,
  select,
  required = false,
  type = 'text',
  classes,
  onChange,
  disableUnderline,
  children,
  readOnly = select ? true : false,
  hiddenLabel,
  inputProps,
  helperText,
}: TextField) {
  const [touched, setTouched] = useState(false)
  const [ComponentValue, setValue] = useState(value)
  const [opened, setOpened] = useState(false)
  const labelClassName = classes?.labelClassName
  // const colours = {
  //   primary: error ? 'red-600' : 'blue-600',
  //   light: error ? 'red-400' : 'blue-400',
  //   dark: error ? 'red-800' : 'blue-800',
  // }
  // console.log(colours)
  // const colourOptions = {
  //   text: `text-${colours.primary}`,
  //   after: `after:border-b-${colours.primary}`,
  // }
  const changeEventHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setValue(ev.currentTarget.value)
    if (onChange) {
      onChange(ev)
    }
  }
  return (
    <div
      id={id}
      className="relative inline-flex flex-col"
      onBlur={() => {
        if (!ComponentValue) {
          setTouched(false)
          setOpened(false)
        }
      }}
    >
      {!hiddenLabel && (
        <label
          className={classNames(
            'label-text-field',
            'text-lg cursor-text left-0 z-10',
            {
              'normal-label-text-field-filled': !touched,
              'mini-label-text-field-filled': touched,
              'text-error-color': touched && color === 'error',
              'text-primary-color': touched && color === 'primary',
              'text-secundary-color': touched && color === 'secundary',
              'text-warning-color': touched && color === 'warning',
              'text-info-color': touched && color === 'info',
              'text-success-color': touched && color === 'success',
              [labelClassName || '']: labelClassName,
            }
          )}
          htmlFor="filled-input"
        >
          {label}
        </label>
      )}
      <div
        className={classNames(
          'input-div-filled after:border-b-2 flex relative',
          // [colourOptions.after],
          {
            'after:border-b-primary-color': color === 'primary',
            'after:border-b-secundary-color': color === 'secundary',
            'after:border-b-error-color': color === 'error',
            'after:border-b-warning-color': color === 'warning',
            'after:border-b-info-color': color === 'info',
            'after:border-b-success-color': color === 'success',
            'input-div-filled-none ': disableUnderline || !touched,
            'input-div-filled-normal': !disableUnderline && touched,
            [classes?.inputContainerClassName || '']:
              classes?.inputContainerClassName,
          }
        )}
      >
        <input
          id="filled-input"
          disabled={disabled}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          value={value}
          ref={inputRef}
          type={type}
          readOnly={readOnly}
          onChange={(ev) => changeEventHandler(ev)}
          required={required}
          onFocus={() => {
            setTouched(true)
            setOpened(true)
          }}
          className={classNames(
            'input-text-field outline-none bg-gray-100 rounded-sm',
            { [classes?.inputClassName || '']: classes?.inputClassName }
          )}
          {...inputProps}
        />
      </div>
      {opened && select && <div>{children}</div>}
      {helperText && (
        <p
          className={classNames('text-sm mx-3', {
            'text-error-color': color === 'error',
            'text-primary-color': color === 'primary',
            'text-secundary-color': color === 'secundary',
            'text-warning-color': color === 'warning',
            'text-info-color': color === 'info',
            'text-success-color': color === 'success',
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  )
}