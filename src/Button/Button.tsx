import classNames from 'classnames'
import { ReactNode, useState } from 'react'

export interface ButtonProps {
  children?: ReactNode
  variant?: 'contained' | 'outlined' | 'text'
}
export default function Button({ children, variant = 'text' }: ButtonProps) {
  const [animation, setAnimation] = useState(false)
  return (
    <button
      onClick={() => {
        setAnimation(true)
        setTimeout(() => {
          setAnimation(false)
        }, 900)
      }}
      className={classNames(
        'inline-flex items-center justify-center relative bg-transparent outline-none uppercase rounded-[4px] min-w-[64px]',
        'overflow-hidden',
        {
          ' hover:bg-primary-color hover:bg-opacity-10 py-[6px] px-2':
            variant === 'text',
        }
      )}
    >
      {animation && (
        <span className="animate-ripple absolute inline-flex w-full h-full rounded-full bg-primary-color bg-opacity-25"></span>
      )}
      {children}
    </button>
  )
}
