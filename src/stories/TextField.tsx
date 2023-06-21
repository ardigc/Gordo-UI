import {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from 'react'
import classNames from 'classnames'

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
}
export default function TextField({
  label,
  variant,
  error,
  defaultValue,
  disabled,
  autoFocus = false,
  id,
  value,
  type = 'text',
  classes,
  onChange,
}: TextField) {
  const [touched, setTouched] = useState(false)
  const [ComponentValue, setValue] = useState(value)
  const labelClassName = classes?.labelClassName
  const colours = {
    primary: error ? 'red-600' : 'blue-600',
    light: error ? 'red-400' : 'blue-400',
    dark: error ? 'red-800' : 'blue-800',
  }
  console.log(colours)
  const colourOptions = {
    text: `text-${colours.primary}`,
    after: `after:border-b-${colours.primary}`,
  }
  const changeEventHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setValue(ev.currentTarget.value)
    if (onChange) {
      onChange(ev)
    }
  }
  return (
    <div
      id={id}
      className="relative inline-flex"
      onBlur={() => {
        if (!ComponentValue) {
          setTouched(false)
        }
      }}
    >
      <label
        className={classNames('label-text-field', 'text-lg cursor-text', {
          'normal-label-text-field-filled': !touched,
          'mini-label-text-field-filled': touched,
          [colourOptions.text]: touched,
          [labelClassName || '']: labelClassName,
        })}
        htmlFor="filled-input"
      >
        {label}
      </label>
      <div
        className={classNames(
          'input-div-filled after:border-b-2 ',
          [colourOptions.after],
          {
            'input-div-filled-none ': !touched,
            'input-div-filled-normal': touched,
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
          type={type}
          onChange={(ev) => changeEventHandler(ev)}
          onFocus={() => setTouched(true)}
          className={classNames(
            'input-text-field outline-none bg-gray-100 rounded-sm',
            { [classes?.inputClassName || '']: classes?.inputClassName }
          )}
        />
      </div>
      {/* prueba */}
    </div>
  )
}
