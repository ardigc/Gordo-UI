import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react'

type TableRowReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>
export interface TableRowProps extends TableRowReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
  hover?: boolean
}
export default function TableRow({
  children,
  hover,
  className,
  component,
  ...rest
}: TableRowProps) {
  const RenderComponent = component ? component : 'tr'
  return (
    <RenderComponent
      className={classNames({'hover:bg-slate-200':hover ,[className || '']: className })}
      {...rest}
    >
      {children}
    </RenderComponent>
  )
}
