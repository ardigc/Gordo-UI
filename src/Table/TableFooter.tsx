import classNames from 'classnames'
import { DetailedHTMLProps, ElementType, HTMLAttributes, ReactNode } from 'react'

type TableFooterReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>
export interface TableFooterProps extends TableFooterReactProps {
  children?: ReactNode
  className?: string
  component?:ElementType
}
export default function TableFooter({
  children,
  className,
  component,
  ...rest
}: TableFooterProps) {
  const RenderComponent =component? component:'tfoot'
  return (
    <RenderComponent
      className={classNames('table-footer-group', {
        [className || '']: className,
      })}
      {...rest}
    >
      {children}
    </RenderComponent>
  )
}
