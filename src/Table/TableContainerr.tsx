import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react'
import { component } from '../FormHelper/FormHelper.stories'

type TableContainerReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface TableContainerPops extends TableContainerReactProps {
  children: ReactNode
  component: ElementType
}
export default function TableContainer({ children }: TableContainerPops) {
  const RenderComponent = component ? component : 'div'
  return (
    <>
      <RenderComponent>{children}</RenderComponent>
    </>
  )
}
