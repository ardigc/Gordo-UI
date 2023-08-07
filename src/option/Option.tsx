import { MouseEvent, MouseEventHandler, ReactNode, useContext } from 'react'
import { TextFieldContext } from '../TextField/TextField'

export interface OptionProps {
  children?: ReactNode
  className?: string
  onClick?: (ev: MouseEvent<HTMLDivElement>) => void
  value: string
}
// Partial<OptionProps>
export function Option({
  children,
  className = 'cursor-pointer hover:bg-slate-200',
  onClick,
  value,
}: OptionProps) {
  const { handleOptionClick, setOpened } = useContext(TextFieldContext)

  const clickHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    if (onClick) {
      onClick(ev)
    }
    if (handleOptionClick && setOpened) {
      handleOptionClick(value)
      setOpened(false)
    }
  }

  return (
    <div onClick={clickHandler} className={className}>
      {children}
    </div>
  )
}
