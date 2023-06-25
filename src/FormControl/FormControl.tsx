import classNames from 'classnames'
import { ReactNode, FormEvent, createContext, useState, Dispatch, SetStateAction } from 'react'
import Clickaway from '../ClickAway/ClickAway'

export type FormControlContextType = {
  contextVariant?: 'filled' | 'outlined' | 'standard'
  contextTouched?:boolean
  setLabel?:Dispatch<SetStateAction<ReactNode>>
  contextLabel?:ReactNode
  contextValue?: string | ReadonlyArray<string> | number | undefined
  setContextValue?:Dispatch<SetStateAction<string | ReadonlyArray<string> | number | undefined>>

  // setTouched?: Dispatch<SetStateAction<boolean>>
}
export const FormControlContext = createContext<FormControlContextType>({})

export interface FormControlProps {
  children?: ReactNode
  onSubmit?: (ev: FormEvent<HTMLFormElement>) => void
  variant?: 'filled' | 'outlined' | 'standard'
  margin?: 'dense' | 'none' | 'normal'
  fullWidth?: boolean
  className?:string
}
export default function FormControl({
  children,
  onSubmit,
  variant = 'outlined',
  margin = 'normal',
  fullWidth,
  className,
}: FormControlProps) {
  const [contextTouched, setTouched]=useState(false)
  const[contextLabel, setLabel]=useState<ReactNode>('')
  const [contextValue, setContextValue]=useState<string | ReadonlyArray<string> | number | undefined>()
  return (
    <Clickaway onClickaway={()=>{if (!contextValue) {
      setTouched(false)
    }}}>

    <form
      className={classNames('relative inline-flex flex-col bg-opacity-0', {
        'mt-2 mb-1': margin === 'dense',
        'mt-4 mb-2': margin === 'normal',
        'w-full': fullWidth,
        [className||'']:className,
      })}
      onFocus={()=>setTouched(true)}
      onSubmit={onSubmit}
      >
      <FormControlContext.Provider value={{contextTouched, setContextValue,contextLabel,setLabel,contextVariant: variant }}>
        {children}
      </FormControlContext.Provider>
    </form>
      </Clickaway>
  )
}
