import {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  useState,
} from 'react'
import Popover from '../Popover/Popover'
export interface TooltipProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}
export default function Tooltip({ children }: TooltipProps) {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined)
  const [open, setOpen] = useState(false)
  const onMouseEnterHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    setAnchorEl(ev.currentTarget)
    setOpen(true)
  }

  const OnMouseLeaveHandler: MouseEventHandler<HTMLDivElement> = () => {
    console.log('hola')
    setOpen(false)
  }
  return (
    <div className="inline-flex">
      <Popover
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        anchorEl={anchorEl}
        classes={{ root: 'pointer-events-none' }}
      >
        <div>holiwi</div>
      </Popover>
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={OnMouseLeaveHandler}
      >
        {children}
      </div>
    </div>
  )
}
