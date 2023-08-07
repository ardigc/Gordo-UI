import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react'

type TableBodyReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>
export interface TableBodyProps extends TableBodyReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
}
export function TableBody({
  children,
  className,
  component,
  ...rest
}: TableBodyProps) {
  const RenderComponent = component ? component : 'tbody'
  return (
    <RenderComponent
      className={classNames('table-row-group', {
        [className || '']: className,
      })}
      {...rest}
    >
      {children}
    </RenderComponent>
  )
}
