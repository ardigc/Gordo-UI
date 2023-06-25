import classNames from 'classnames'
import { ReactNode, FormEvent, createContext } from 'react'

export type FormControlContextType = {
  contextVariant?: 'filled' | 'outlined' | 'standard'
}
export const FormControlContext = createContext<FormControlContextType>({})

export interface FormControlProps {
  children?: ReactNode
  onSubmit?: (ev: FormEvent<HTMLFormElement>) => void
  variant?: 'filled' | 'outlined' | 'standard'
  margin?: 'dense' | 'none' | 'normal'
  fullWidth?: boolean
}
export default function FormControl({
  children,
  onSubmit,
  variant = 'outlined',
  margin = 'normal',
  fullWidth,
}: FormControlProps) {
  return (
    <form
      className={classNames('relative inline-flex flex-col bg-opacity-0', {
        'mt-2 mb-1': margin === 'dense',
        'mt-4 mb-2': margin === 'normal',
        'w-full': fullWidth,
      })}
      onSubmit={onSubmit}
    >
      <FormControlContext.Provider value={{ contextVariant: variant }}>
        {children}
      </FormControlContext.Provider>
    </form>
  )
}
