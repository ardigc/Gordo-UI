import classNames from 'classnames'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useContext,
  useState,
} from 'react'
import ClickAway from '../ClickAway/ClickAway'
import { ElementType, ReactNode } from 'react'
import { FormControlContext } from '../FormControl/FormControl'

export interface InputProps {
  autocomplete?: string
  id?: string
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
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
  label?: string | ReactNode
  variant?: 'filled' | 'outlined' | 'standard'
  size?: 'medium' | 'small'
  shrink?: boolean
}
export function Input({
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
  shrink,
  onChange,
  onFocus,
  className,
  variant = 'standard',
  size = 'medium',
  label,
}: InputProps) {
  const [touched, setTouched] = useState(false)
  const UserInput = components?.Input || inputComponent
  const UserComponent = components?.Container
  const {
    contextVariant,
    contextTouched,
    contextLabel,
    contextRequired,
    setContextValue,
    contextColor,
    contextDisabled,
    focused,
    hiddenLabel,
  } = useContext(FormControlContext)
  autoFocus = focused ? focused : autoFocus
  variant = contextVariant ? contextVariant : variant
  color = contextColor ? contextColor : color
  shrink = contextTouched ? contextTouched : shrink
  label = contextLabel ? contextLabel : label
  disabled = contextDisabled ? contextDisabled : disabled
  required = contextRequired ? contextRequired : required

  const RenderComponent = UserComponent ? UserComponent : 'div'
  const RenderComponentProps = UserComponent
    ? { ...componentsProps?.container }
    : {
        className: classNames('input-custom group inline-flex flex relative ', {
          'hover:before:border-t-2 before:border-black after:border-b-2 before:border-t':
            !disaledUndeline && !disabled && !(variant === 'outlined'),
          'mt-4': label && variant === 'standard',
          'w-full': fullWidth,
          'bg-gray-100 rounded-t-sm': variant === 'filled',
          'px-[14px] py-4': multiline && variant === 'outlined',
          'px-3 pt-[25px] pb-2': multiline && variant === 'filled',
          'mt-2 mb-1': margin === 'dense',
          [`after:border-b-${color}-color`]: color,
          'after:border-b-primary-color': color === 'primary',
          'after:border-b-secondary-color': color === 'secondary',
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
    if (setContextValue) {
      setContextValue(ev.currentTarget.value)
    }
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
  return (
    <ClickAway onClickaway={() => setTouched(false)}>
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
              value={value}
              autoFocus={autoFocus}
              placeholder={placeholder}
              className={classNames('outline-none bg-white bg-opacity-0', {
                'w-full': fullWidth,
                'pt-6 pb-2': size === 'medium' && variant === 'filled',
                'pt-5 pb-1': size === 'small' && variant === 'filled',
                'pt-1 pb-[5px]': size === 'medium' && variant === 'standard',
                'pt-[1px] pb-[5px]': size === 'small' && variant === 'standard',
                'pr-3 pl-3': variant === 'filled',
                'px-3 py-[16.5px]': size === 'medium' && variant === 'outlined',
                'px-[8.5px] py-[14px]':
                  size === 'small' && variant === 'outlined',
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
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            readOnly={readonly}
            required={required}
            className={classNames('outline-none resize-none', {
              'w-full': fullWidth,
              'pb-2': variant === 'standard',
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
        {variant === 'outlined' && (
          <fieldset
            className={classNames(
              'absolute left-0 right-0   bottom-0   -top-[5px] px-2 border rounded-[4px] pointer-events-none',
              {
                ' border-opacity-100 border-2': touched,
                'border-black group-hover:border-opacity-90 border-opacity-30':
                  !touched,
                'border-primary-color': color === 'primary' && touched,
                'border-secondary-color': color === 'secondary' && touched,
                'border-error-color': color === 'error' && touched,
                'border-warning-color': color === 'warning' && touched,
                'border-info-color': color === 'info' && touched,
                'border-success-color': color === 'success' && touched,
              }
            )}
          >
            <legend
              className={classNames('text-sm', {
                ' invisible max-w-0 transition-all': !shrink,
                ' invisible max-w-full transition-all': shrink,
              })}
            >
              <span
                className={classNames('opacity-0 inline-block px-[5px]', {
                  hidden: hiddenLabel,
                })}
              >
                {label}
              </span>
            </legend>
          </fieldset>
        )}
      </RenderComponent>
    </ClickAway>
  )
}
