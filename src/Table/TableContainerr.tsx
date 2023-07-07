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
export interface TableContainerPops extends TableContainerReactProps {
  children: ReactNode
  component: ElementType
}
export default function TableContainer({
  children,
  component,
  ...rest
}: TableContainerPops) {
  const RenderComponent = component ? component : 'div'
  return (
    <>
      <RenderComponent {...rest}>{children}</RenderComponent>
    </>
  )
}
