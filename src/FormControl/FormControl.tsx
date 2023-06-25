import { ReactNode, FormEvent } from 'react'

export interface FormControlProps {
  children?: ReactNode
  onSubmit?: (ev: FormEvent<HTMLFormElement>) => void
}
export default function FormControl({ children, onSubmit }: FormControlProps) {
  return (
    <form
      onSubmit={(ev) => {
        if (onSubmit) {
          onSubmit(ev)
        }
      }}
    >
      {children}
    </form>
  )
}
