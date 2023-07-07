import classNames from 'classnames'
import {
  DetailedHTMLProps,
  TableHTMLAttributes,
  ReactNode,
  ElementType,
  createContext,
} from 'react'
export type TableContextType = {
  contextPadding?: 'checkbox' | 'none' | 'normal'
}
export const TableContext = createContext<TableContextType>({})
type TableReactPops = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>
export interface TableProps extends TableReactPops {
  children: ReactNode
  className?: string
  component?: ElementType
  padding?: 'checkbox' | 'none' | 'normal'
}
export default function Table({
  children,
  className,
  component,
  padding,
}: TableProps) {
  const RenderComponent = component ? component : 'table'
  return (
    <TableContext.Provider value={{ contextPadding: { padding } }}>
      <RenderComponent
        className={classNames('table w-full border-collapse border-spacing-0', {
          [className || '']: className,
        })}
      >
        {children}
      </RenderComponent>
    </TableContext.Provider>
  )
}
