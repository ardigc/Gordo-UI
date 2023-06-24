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
} from 'react'
import classNames from 'classnames'
import Clickaway from '../ClickAway/ClickAway'
import Input, { InputProps } from '../Input/Input'
import InputLabel from '../InputLabel/InputLabel'
import FormHelper from '../FormHelper/FormHelper'
export type InputContextType = {
  option?: string | ReadonlyArray<string> | number | undefined
  setValue?: Dispatch<
    SetStateAction<string | ReadonlyArray<string> | number | undefined>
  >
  setOpened?: Dispatch<SetStateAction<boolean>>
}
export const TextFieldContext = createContext<InputContextType>({})
// export function TextFieldProvider({ children }: { children: ReactNode }) {
//   const [option, setOption] = useState<
//     string | ReadonlyArray<string> | number | undefined
//   >()
//   return (
//     <TextFieldContext.Provider value={{ option, setOption }}>
//       {children}
//     </TextFieldContext.Provider>
//   )
// }
export interface TextField {
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
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
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
  size?:'medium'|'small'
  margin?: 'dense' | 'none'
  name?: string
  placeholder?: string

}
export default function TextField({
  label,
  variant = 'filled',
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
  readOnly = select ? true : false,
  hiddenLabel,
  inputProps,
  helperText,
  className,
  fullWidth,
  size='medium',
  margin,
  name,
  placeholder,
}: TextField) {
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
    console.log(ComponentValue)
    if (!ComponentValue) {
      setTouched(false)
    }
    setOpened(false)
  }, [ComponentValue])
  return (
    <Clickaway onClickaway={clickAwayHandler}>
      <div id={id} className={classNames("relative inline-flex flex-col",{'w-full':fullWidth})}>
        {!hiddenLabel && (
          // <label
          //   className={classNames(
          //     'label-text-field',
          //     'text-lg cursor-text left-0 z-10',
          //     {
          //       'normal-label-text-field-filled': !touched,
          //       'mini-label-text-field-filled': touched,
          //       'text-error-color': touched && color === 'error',
          //       'text-primary-color': touched && color === 'primary',
          //       'text-secundary-color': touched && color === 'secundary',
          //       'text-warning-color': touched && color === 'warning',
          //       'text-info-color': touched && color === 'info',
          //       'text-success-color': touched && color === 'success',
          //       [labelClassName || '']: labelClassName,
          //     }
          //   )}
          //   htmlFor="filled-input"
          // >
          //   {label}
          // </label>
          <InputLabel
            variant={variant}
            shrink={touched|| inputProps?.startAdornment?true:false}
            className={labelClassName}
            color={color}
            
            htmlFor="filled-input"
          >
            {label}
          </InputLabel>
        )}
        {/* <div
          className={classNames(
            'input-custom after:border-b-2 flex flex-col relative ',
            {
              'after:border-b-primary-color': color === 'primary',
              'after:border-b-secundary-color': color === 'secundary',
              'after:border-b-error-color': color === 'error',
              'after:border-b-warning-color': color === 'warning',
              'after:border-b-info-color': color === 'info',
              'after:border-b-success-color': color === 'success',
              'input-custom-none ': disableUnderline || !touched,
              'input-custom-normal': !disableUnderline && touched,
              [classes?.inputContainerClassName || '']:
                classes?.inputContainerClassName,
            }
          )}
        >
          {!multiLine && (
            <input
              id="filled-input"
              disabled={disabled}
              defaultValue={defaultValue}
              autoFocus={autoFocus}
              value={ComponentValue}
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
          )}
          {multiLine && (
            <textarea
              id="filled-input"
              disabled={disabled}
              defaultValue={defaultValue}
              autoFocus={autoFocus}
              value={ComponentValue}
              ref={TextAreaRef}
              readOnly={readOnly}
              onChange={(ev) => changeEventHandler(ev)}
              required={required}
              rows={rows}
              onFocus={() => {
                setTouched(true)
                setOpened(true)
              }}
              className={classNames(
                'input-text-field outline-none bg-gray-100 rounded-sm resize-none',
                { [classes?.inputClassName || '']: classes?.inputClassName }
              )}
              {...inputProps}
            />
          )}
        </div> */}
        <Input
          id="filled-input"
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
          rows={rows}
          multiline={multiLine}
          variant={variant}
          multilineTextAreaRef={TextAreaRef}
          fullWidth={fullWidth}
          margin={margin}
          onFocus={() => {
            setTouched(true)
            setOpened(true)
          }}
          classes={{
            constainerClassName:classNames('bg-gray-100 rounded-t-sm'),
            inputClassName: classNames(
              ' pr-3 pl-3 outline-none bg-white bg-opacity-0',
              { 'pt-6 pb-2':size==='medium','pt-5 pb-1':size==='small',[classes?.inputClassName || '']: classes?.inputClassName }
            ),
          }}
          className={className}
          {...inputProps}
        />
        <TextFieldContext.Provider value={{ setValue, setOpened }}>
          {opened && select && <div className="max-w-input ">{children}</div>}
        </TextFieldContext.Provider>
        {helperText && (
          // <p
          //   className={classNames('text-sm mx-3', {
          //     'text-error-color': color === 'error',
          //     'text-primary-color': color === 'primary',
          //     'text-secundary-color': color === 'secundary',
          //     'text-warning-color': color === 'warning',
          //     'text-info-color': color === 'info',
          //     'text-success-color': color === 'success',
          //   })}
          // >
          //   {helperText}
          // </p>
          <FormHelper className="mx-3 " error={error}>
            {helperText}
          </FormHelper>
        )}
      </div>
    </Clickaway>
  )
}
