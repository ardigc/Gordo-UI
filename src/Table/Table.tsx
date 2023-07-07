import classNames from 'classnames'
import {
  DetailedHTMLProps,
  TableHTMLAttributes,
  ReactNode,
  ElementType,
} from 'react'
type TableReactPops = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>
export interface TableProps extends TableReactPops {
  children: ReactNode
  className?: string
  component?: ElementType
}
export default function Table({ children, className, component }: TableProps) {
  const RenderComponent = component ? component : 'table'
  return (
    <RenderComponent
      className={classNames('table w-full border-collapse border-spacing-0', {
        [className || '']: className,
      })}
    >
      {children}
    </RenderComponent>
  )
}
