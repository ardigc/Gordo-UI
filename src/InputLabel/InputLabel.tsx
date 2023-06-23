import { ReactNode } from 'react'
export interface InputLabelProps {
  children?: ReactNode
}
export default function InputLabel({ children }: InputLabelProps) {
  return <label>{children}</label>
}
