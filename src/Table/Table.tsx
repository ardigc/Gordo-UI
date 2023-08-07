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
  contextSize?: 'medium' | 'small'
  contextSticky?: boolean
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
  size?: 'medium' | 'small'
  stickyHeader?: boolean
}
export function Table({
  children,
  className,
  component,
  padding = 'normal',
  size = 'medium',
  stickyHeader,
  ...rest
}: TableProps) {
  const RenderComponent = component ? component : 'table'
  return (
    <TableContext.Provider
      value={{
        contextPadding: padding,
        contextSize: size,
        contextSticky: stickyHeader,
      }}
    >
      <RenderComponent
        className={classNames(
          'table w-full  border-separate border-spacing-0',
          {
            [className || '']: className,
          }
        )}
        {...rest}
      >
        {children}
      </RenderComponent>
    </TableContext.Provider>
  )
}
