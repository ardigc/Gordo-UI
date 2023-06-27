import classNames from 'classnames'
// import { useState } from 'react'
import { createPortal } from 'react-dom'
export interface PopoverProps {
  open: boolean
  onClose?: () => void
  anchorReference?: 'anchorEl' | 'anchorPosition'
  anchorEl?: Element | (() => Element)
  anchorOrigin?:{ horizontal?: 'center' | 'left' | 'right' , vertical?: 'bottom' | 'center' | 'top' }
}
export default function Popover({
  open,
  onClose,
  anchorReference = 'anchorEl',
  anchorEl,
  anchorOrigin={ vertical: 'top', horizontal: 'left' },
}: PopoverProps) {
  function resolveAnchorEl(anchorEl: Element | (() => Element)) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl
  }
  const location = anchorEl
    ? resolveAnchorEl(anchorEl).getBoundingClientRect()
    : null
 const setPopoverTopPosition=()=>{
if (anchorOrigin.vertical==='top') {
  return location?.top
}else if (anchorOrigin.vertical==='bottom') {
  if (!location)return
  return location?.top+location?.height
}
 }
 const setPopoverLeftPosition=()=>{
  if (anchorOrigin.horizontal==='left') {
    return location?.left
    
  }

 }
  const setPopoverPosition=()=>{
    if(anchorReference==='anchorEl'){
      const top= setPopoverTopPosition()
      const left= setPopoverLeftPosition()
      return {top:top, left:left}
      
    }
  }
  const position= setPopoverPosition()

  return (
    <>
      {open &&
        createPortal(
          <div className={classNames('fixed inset-0 z-[1300]')}>
            <div
              onClick={onClose}
              className={classNames('fixed inset-0 flex bg-transparent -z-[1]')}
            ></div>
            <div
              style={{
                top: position?.top,
                left: position?.left,
              }}
              className={classNames('absolute border')}
            >
              hola
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
