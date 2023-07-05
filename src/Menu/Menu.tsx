import { DetailedHTMLProps, ReactNode, useEffect, HTMLAttributes } from 'react'
import Popover from '../Popover/Popover'

type UlReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>
export interface MenuProps extends UlReactProps {
  children?: ReactNode
  open: boolean
  anchorEl?: Element | (() => Element)
  onClose?: () => void
}
export default function Menu({
  children,
  open,
  anchorEl,
  onClose,
  ...rest
}: MenuProps) {
  const clickAwayHandler = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      onClose={clickAwayHandler}
      className="bg-white"
      open={open}
    >
      <ul {...rest}>{children}</ul>
    </Popover>
  )
}
