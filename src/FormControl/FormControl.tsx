import classNames from 'classnames'
import {
  ReactNode,
  FormEvent,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ElementType,
  DetailedHTMLProps,
  FormHTMLAttributes,
} from 'react'
import { ClickAway } from '../ClickAway/ClickAway'

export type FormControlContextType = {
  contextVariant?: 'filled' | 'outlined' | 'standard'
  contextTouched?: boolean
  setLabel?: Dispatch<SetStateAction<ReactNode>>
  contextLabel?: ReactNode
  contextValue?: string | ReadonlyArray<string> | number | undefined
  setContextValue?: Dispatch<
    SetStateAction<string | ReadonlyArray<string> | number | undefined>
  >
  contextColor?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
  contextDisabled?: boolean
  // setTouched?: Dispatch<SetStateAction<boolean>>
  focused?: boolean
  hiddenLabel?: boolean
  contextRequired?: boolean
}
export const FormControlContext = createContext<FormControlContextType>({})
type formReactProps= DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>,HTMLFormElement>

export interface FormControlProps extends formReactProps {
  children?: ReactNode
  onSubmit?: (ev: FormEvent<HTMLFormElement>) => void
  variant?: 'filled' | 'outlined' | 'standard'
  margin?: 'dense' | 'none' | 'normal'
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  component?: ElementType
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  error?: boolean
  focused?: boolean
  hiddenLabel?: boolean
  required?: boolean
}
export function FormControl({
  children,
  onSubmit,
  variant = 'outlined',
  margin = 'normal',
  fullWidth,
  className,
  component,
  disabled,
  error,
  color = error ? 'error' : 'primary',
  focused,
  hiddenLabel,
  required,
  ...rest
}: FormControlProps) {
  const [contextTouched, setTouched] = useState(false)
  const [contextLabel, setLabel] = useState<ReactNode>('')
  const [contextValue, setContextValue] = useState<
    string | ReadonlyArray<string> | number | undefined
  >()
  const RenderComponent = component ? component : 'form'
  return (
    <ClickAway
      onClickaway={() => {
        if (!contextValue) {
          setTouched(false)
        }
      }}
    >
      <RenderComponent
        className={classNames('relative inline-flex flex-col', {
          'mt-2 mb-1': margin === 'dense',
          'mt-4 mb-2': margin === 'normal',
          'w-full': fullWidth,
          [className || '']: className,
        })}
        onFocus={() => setTouched(true)}
        onSubmit={onSubmit}
        {...rest}
      >
        <FormControlContext.Provider
          value={{
            contextTouched,
            contextColor: color,
            setContextValue,
            contextLabel,
            setLabel,
            contextVariant: variant,
            contextDisabled: disabled,
            focused,
            hiddenLabel,
            contextRequired: required,
          }}
        >
          {children}
        </FormControlContext.Provider>
      </RenderComponent>
    </ClickAway>
  )
}
