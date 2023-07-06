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
  selected?: boolean
}
export default function TableRow({
  children,
  hover,
  className,
  component,
  selected,
  ...rest
}: TableRowProps) {
  const RenderComponent = component ? component : 'tr'
  return (
    <RenderComponent
      className={classNames('table-row text-inherit align-middle outline-0', {
        'hover:bg-slate-200': hover,
        'bg-blue-50 hover:bg-blue-100':selected,
        [className || '']: className,
      })}
      {...rest}
    >
      {children}
    </RenderComponent>
  )
}
