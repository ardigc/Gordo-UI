import { ReactNode, useRef } from 'react'

export default function ClickAwait({
  onClickAwait,
  children,
}: {
  children: ReactNode
  onClickAwait: (event: MouseEvent | TouchEvent) => void
}) {
  const tartget = useRef

  return <div ref={tartget}>{children}</div>
}
