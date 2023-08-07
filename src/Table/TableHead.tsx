import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
  createContext,
} from 'react'
export type TableHeadContextType = {
  head?: boolean
}

export const TableHeadContext = createContext<TableHeadContextType>({})
type TableHeadReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>
export interface TableHeadProps extends TableHeadReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
}
export function TableHead({
  children,
  className,
  component,
  ...rest
}: TableHeadProps) {
  const RenderComponent = component ? component : 'thead'
  return (
    <TableHeadContext.Provider value={{ head: true }}>
      <RenderComponent
        className={classNames('table-row-group', {
          [className || '']: className,
        })}
        {...rest}
      >
        {children}
      </RenderComponent>
    </TableHeadContext.Provider>
  )
}
