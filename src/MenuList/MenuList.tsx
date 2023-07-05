import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type UlReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>
export interface MenuListProps extends UlReactProps {
  children: ReactNode
}
export default function MenuList({ children, ...rest }: MenuListProps) {
  return <ul {...rest}>{children}</ul>
}
