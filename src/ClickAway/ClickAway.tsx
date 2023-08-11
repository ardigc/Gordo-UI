import React, {
  useRef,
  useEffect,
  ReactElement,
  JSXElementConstructor,
} from 'react'

export function ClickAway({
  onClickaway,
  children,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  onClickaway: (event: MouseEvent | TouchEvent) => void
}) {
  const targetRef = useRef<HTMLElement>(null)
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
    <>{React.cloneElement(children, { ref: targetRef })}</>
  )
}
