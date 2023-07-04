import classNames from 'classnames'
import { ReactNode } from 'react'
export interface MenuItemProps {
  children: ReactNode
}
export default function MenuItem({ children }: MenuItemProps) {
  return (
    <li
      className={classNames(
        'flex font-normal text-base font-base bg-transparent justify-start py-[6px] px-4'
      )}
    >
      {children}
    </li>
  )
}
