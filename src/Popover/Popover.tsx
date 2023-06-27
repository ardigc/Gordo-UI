import classNames from 'classnames'
import { useState } from 'react'
import { createPortal } from 'react-dom'
export interface PopoverProps {
  open?: boolean
  onClose?: () => void
  anchorReference?: 'anchorEl' | 'anchorPosition'
  anchorEl?: Element | (() => Element)
}
export default function Popover({
  open,
  onClose,
  anchorReference = 'anchorEl',
  anchorEl,
}: PopoverProps) {
  function resolveAnchorEl(anchorEl: Element | (() => Element)) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl
  }
  const location = anchorEl
    ? resolveAnchorEl(anchorEl).getBoundingClientRect()
    : null
  console.log(location)

  return (
    <>
      {open &&
        createPortal(
          <div className={classNames('fixed inset-0 z-[1300]')}>
            <div
              onClick={onClose}
              className={classNames('fixed inset-0 flex bg-transparent -z-[1]')}
            ></div>
            <div>hola</div>
          </div>,
          document.body
        )}
    </>
  )
}
