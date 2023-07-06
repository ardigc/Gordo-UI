import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react'

type TableHeadReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>
export interface TableHeadProps extends TableHeadReactProps {
  children?: ReactNode
  className?: string
  component?: ElementType
}
export default function TableHead({
  children,
  className,
  component,
  ...rest
}: TableHeadProps) {
  const RenderComponent = component ? component : 'thead'
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
