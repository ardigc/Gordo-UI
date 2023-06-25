import classNames from 'classnames'
import { ReactNode, ElementType, useContext } from 'react'
import { FormControlContext } from '../FormControl/FormControl'

export interface FormHelperProps {
  children?: ReactNode
  className?: string
  component?: ElementType
  componentProps?: React.HTMLAttributes<HTMLElement>
  disabled?: boolean
  error?: boolean
  margin?: 'dense' | 'none'
  id?: string
}
export default function FormHelper({
  children,
  className,
  component,
  componentProps,
  disabled,
  error,
  margin,
  id,
}: FormHelperProps) {
  const RederComponent = component ? component : 'p'
const {contextVariant, contextColor, contextDisabled}=useContext(FormControlContext)
disabled=contextDisabled?contextDisabled: disabled
error= contextColor==='error'? true:error
  return (
    <RederComponent
      id={id}
      className={classNames('text-xs text-left tracking-wide', {
        'mx-3':contextVariant,
        'text-error-color': error,
        'mt-2 mb-1': margin === 'dense',

        'opacity-30': disabled,
        [className || '']: className,
      })}
      {...componentProps}
    >
      {children}
    </RederComponent>
  )
}
