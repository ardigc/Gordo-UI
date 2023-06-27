import classNames from 'classnames'
import { useState } from 'react'
import { createPortal } from 'react-dom'
export interface PopoverProps {
  open?: boolean
  onClose?: () => void
}
export default function Popover({ open, onClose }: PopoverProps) {
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
