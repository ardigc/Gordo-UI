import { ReactNode, useRef, useEffect } from 'react'

export default function Clickaway({
  onClickaway,
  children,
}: {
  children: ReactNode
  onClickaway: (event: MouseEvent | TouchEvent) => void
}) {
  const targetRef = useRef<HTMLDivElement>(null)
  const clickInside = (ev: MouseEvent | TouchEvent) => {
    if (
      targetRef.current &&
      ev.target instanceof Node &&
      !targetRef.current.contains(ev.target)
    ) {
      onClickaway(ev)
    }
  }
  useEffect(() => {
    document.addEventListener('click', clickInside)
    return () => {
      document.removeEventListener('click', clickInside)
    }
  }, [clickInside])
  return (
    <div className="inline-flex" ref={targetRef}>
      {children}
    </div>
  )
}
