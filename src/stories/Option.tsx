import { MouseEvent, MouseEventHandler, ReactNode, useContext } from 'react'
import { TextFieldContext } from './TextField'

export interface OptionProps {
  children?: ReactNode
  className?: string
  onClick?: (ev: MouseEvent<HTMLDivElement>) => void
  value: string
}
// Partial<OptionProps>
export default function Option({
  children,
  className = 'cursor-pointer hover:bg-slate-200',
  onClick,
  value,
}: OptionProps) {
  const { setOption } = useContext(TextFieldContext)

  const clickHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    console.log(value)
    if (onClick) {
      onClick(ev)
    }
    if (setOption) {
      setOption(value)
    }
  }

  return (
    <div onClick={clickHandler} className={className}>
      {children}
    </div>
  )
}
