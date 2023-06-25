import classNames from 'classnames'
import { ReactNode, FormEvent, createContext, useState, Dispatch, SetStateAction } from 'react'
import Clickaway from '../ClickAway/ClickAway'

export type FormControlContextType = {
  contextVariant?: 'filled' | 'outlined' | 'standard'
  contextTouched?:boolean
  // setTouched?: Dispatch<SetStateAction<boolean>>
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
  const [contextTouched, setTouched]=useState(false)
  return (
    <Clickaway onClickaway={()=>setTouched(false)}>

    <form
      className={classNames('relative inline-flex flex-col bg-opacity-0', {
        'mt-2 mb-1': margin === 'dense',
        'mt-4 mb-2': margin === 'normal',
        'w-full': fullWidth,
      })}
      onFocus={()=>setTouched(true)}
      onSubmit={onSubmit}
      >
      <FormControlContext.Provider value={{contextTouched, contextVariant: variant }}>
        {children}
      </FormControlContext.Provider>
    </form>
      </Clickaway>
  )
}
