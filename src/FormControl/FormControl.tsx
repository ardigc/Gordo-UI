import { ReactNode, FormEvent, createContext } from 'react'

export type FormControlContextType = {
  contextVariant?: 'filled' | 'outlined' | 'standard'
}
export const FormControlContext = createContext<FormControlContextType>({})

export interface FormControlProps {
  children?: ReactNode
  onSubmit?: (ev: FormEvent<HTMLFormElement>) => void
  variant?: 'filled' | 'outlined' | 'standard'
}
export default function FormControl({
  children,
  onSubmit,
  variant = 'outlined',
}: FormControlProps) {
  return (
    <form onSubmit={onSubmit}>
      <FormControlContext.Provider value={{ contextVariant: variant }}>
        {children}
      </FormControlContext.Provider>
    </form>
  )
}
