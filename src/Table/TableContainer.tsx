import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react'

type TableContainerReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface TableContainerProps extends TableContainerReactProps {
  children: ReactNode
  component?: ElementType
}
export function TableContainer({
  children,
  component,
  ...rest
}: TableContainerProps) {
  const RenderComponent = component ? component : 'div'
  return (
    <>
      <RenderComponent {...rest}>{children}</RenderComponent>
    </>
  )
}
