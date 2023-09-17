import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  HTMLInputTypeAttribute,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useCallback,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react'
import classNames from 'classnames'
import { ClickAway } from '../ClickAway/ClickAway'
import { Input, InputProps } from '../Input/Input'
import { InputLabel } from '../InputLabel/InputLabel'
import { FormHelper } from '../FormHelper/FormHelper'
export type InputContextType = {
  option?: string | ReadonlyArray<string> | number | undefined
  setValue?: Dispatch<
    SetStateAction<string | ReadonlyArray<string> | number | undefined>
  >
  handleOptionClick?: (option: string) => void
  setOpened?: Dispatch<SetStateAction<boolean>>
}
export const TextFieldContext = createContext<InputContextType>({})
type InputReactProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
export interface TextFieldProps
  extends Omit<InputReactProps, 'size' | 'onFocus'> {
  label?: string
  variant?: 'filled' | 'outlined' | 'standard'
  classes?: {
    labelClassName?: string
    inputContainerClassName?: string
    inputClassName?: string
  }
  onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  id?: string
  type?: HTMLInputTypeAttribute
  value?: string | ReadonlyArray<string> | number | undefined
  autoFocus?: boolean
  defaultValue?: string | number | ReadonlyArray<string> | undefined
  disabled?: boolean | undefined
  error?: boolean | undefined
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  disableUnderline?: boolean | undefined
  select?: boolean
  children?: ReactNode
  readOnly?: boolean
  hiddenLabel?: boolean | undefined
  inputProps?: InputProps
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined
  TextAreaRef?: React.LegacyRef<HTMLTextAreaElement> | undefined
  required?: boolean
  helperText?: string | undefined
  multiLine?: boolean
  rows?: number
  className?: string
  fullWidth?: boolean
  size?: 'medium' | 'small'
  margin?: 'dense' | 'none' | 'normal'
  name?: string
  placeholder?: string
}
export function TextField({
  label,
  variant = 'standard',
  error,
  color = error ? 'error' : 'primary',
  defaultValue,
  disabled,
  inputRef,
  autoFocus = false,
  id,
  value,
  rows = 1,
  select,
  required = false,
  type = 'text',
  classes,
  onChange,
  disableUnderline,
  multiLine,
  TextAreaRef,
  children,
  readOnly,
  hiddenLabel,
  inputProps,
  helperText,
  className,
  fullWidth,
  size = 'medium',
  margin = 'none',
  name,
  placeholder,
  ...rest
}: TextFieldProps) {
  const [touched, setTouched] = useState(false)
  const [ComponentValue, setValue] = useState(value)
  const [opened, setOpened] = useState(false)
  const labelClassName = classes?.labelClassName
  const changeEventHandler: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (ev) => {
    setValue(ev.currentTarget.value)
    if (onChange) {
      onChange(ev)
    }
  }
  const clickAwayHandler = useCallback(() => {
    if (!ComponentValue) {
      setTouched(false)
    }
    setOpened(false)
  }, [ComponentValue])
  const handleOptionClick = (option: string) => {
    const fakeEvent = {
      currentTarget: {
        value: option,
      },
    } as ChangeEvent<HTMLInputElement>
    changeEventHandler(fakeEvent)
  }
  return (
    <ClickAway onClickaway={clickAwayHandler}>
      <div
        id={id}
        className={classNames('relative inline-flex flex-col', {
          'mt-2 mb-1': margin === 'dense',
          'mt-4 mb-2': margin === 'normal',
          'w-full': fullWidth,
        })}
      >
        {!hiddenLabel && (
          <InputLabel
            variant={variant}
            shrink={touched || inputProps?.startAdornment ? true : false}
            className={classNames('pointer-events-none', {
              [labelClassName || '']: labelClassName,
            })}
            color={color}
            disabled={disabled}
            size={size}
            htmlFor="input"
          >
            {label}
          </InputLabel>
        )}

        <Input
          disabled={disabled}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          value={ComponentValue}
          inputRef={inputRef}
          type={type}
          disaledUndeline={disableUnderline}
          readonly={readOnly}
          onChange={(ev) => changeEventHandler(ev)}
          required={required}
          name={name}
          placeholder={placeholder}
          color={color}
          size={size}
          label={label}
          rows={rows}
          shrink={touched || inputProps?.startAdornment ? true : false}
          multiline={multiLine}
          variant={variant}
          multilineTextAreaRef={TextAreaRef}
          fullWidth={fullWidth}
          onFocus={() => {
            setTouched(true)
            setOpened(true)
          }}
          classes={{
            constainerClassName: classNames({
              [classes?.inputContainerClassName || '']:
                classes?.inputContainerClassName,
            }),
            inputClassName: classNames(' bg-white bg-opacity-0', {
              [classes?.inputClassName || '']: classes?.inputClassName,
            }),
          }}
          className={className}
          {...inputProps}
          {...rest}
        />

        <TextFieldContext.Provider value={{ handleOptionClick, setOpened }}>
          {opened && select && <div className="max-w-input ">{children}</div>}
        </TextFieldContext.Provider>
        {helperText && (
          <FormHelper className="mx-3 " error={error || color === 'error'}>
            {helperText}
          </FormHelper>
        )}
      </div>
    </ClickAway>
  )
}
