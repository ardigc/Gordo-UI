import classNames from 'classnames'
// import { useState } from 'react'
import { createPortal } from 'react-dom'
export interface PopoverProps {
  open: boolean
  onClose?: () => void
  anchorReference?: 'anchorEl' | 'anchorPosition'
  anchorEl?: Element | (() => Element)
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  }
}
export default function Popover({
  open,
  onClose,
  anchorReference = 'anchorEl',
  anchorEl,
  anchorOrigin = { vertical: 'top', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
}: PopoverProps) {
  function resolveAnchorEl(anchorEl: Element | (() => Element)) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl
  }
  const location = anchorEl
    ? resolveAnchorEl(anchorEl).getBoundingClientRect()
    : null
  const setPopoverTopPosition = () => {
    if (anchorOrigin.vertical === 'top') {
      return location?.top
    } else if (anchorOrigin.vertical === 'bottom') {
      if (!location) return
      return location?.top + location?.height
    } else if (anchorOrigin.vertical === 'center') {
      if (!location) return
      return location?.top + location?.height / 2
    }
  }
  const setPopoverLeftPosition = () => {
    if (anchorOrigin.horizontal === 'left') {
      return location?.left
    } else if (anchorOrigin.horizontal === 'right') {
      if (!location) return
      return location?.left + location?.width
    } else if (anchorOrigin.horizontal === 'center') {
      if (!location) return
      return location?.left + location?.width / 2
    }
  }
  const setPopoverTransformY = () => {
    if (transformOrigin.vertical === 'top') {
      return 0
    } else if (transformOrigin.vertical === 'center') {
      return '-50%'
    } else if (transformOrigin.vertical === 'bottom') {
      return '-100%'
    }
  }
  const setPopoverTransformX = () => {
    if (transformOrigin.horizontal === 'left') {
      return 0
    } else if (transformOrigin.horizontal === 'center') {
      return '-50%'
    } else if (transformOrigin.horizontal === 'right') {
      return '-100%'
    }
  }
  const setPopoverPosition = () => {
    if (anchorReference === 'anchorEl') {
      const top = setPopoverTopPosition()
      const left = setPopoverLeftPosition()
      const transformX = setPopoverTransformX()
      const transformY = setPopoverTransformY()
      return { top: top, left: left, transformX, transformY }
    }
  }
  const position = setPopoverPosition()

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
                translate: `${position?.transformX} ${position?.transformY}`,
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
