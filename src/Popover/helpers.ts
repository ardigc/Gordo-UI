const setPopoverTopPosition = (
  ref: { height: number; width: number },
  marginThreshold: number,
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  location?: DOMRect
) => {
  if (anchorOrigin?.vertical === 'top') {
    if (transformOrigin?.vertical === 'top' && location) {
      return Math.max(marginThreshold, location.top)
    } else if (transformOrigin?.vertical === 'center' && location) {
      return Math.max(marginThreshold, location.top - ref.height / 2)
    } else if (transformOrigin?.vertical === 'bottom' && location) {
      return Math.max(marginThreshold, location.top - ref.height)
    }
  } else if (anchorOrigin?.vertical === 'bottom') {
    if (transformOrigin?.vertical === 'top' && location) {
      return Math.max(marginThreshold, location?.top + location?.height)
    } else if (transformOrigin?.vertical === 'center' && location) {
      return Math.max(
        marginThreshold,
        location?.top + location?.height - ref.height / 2
      )
    } else if (transformOrigin?.vertical === 'bottom' && location) {
      return Math.max(
        marginThreshold,
        location?.top + location?.height - ref.height
      )
    }
  } else if (anchorOrigin?.vertical === 'center') {
    if (!location) return
    if (transformOrigin?.vertical === 'top' && location) {
      return Math.max(marginThreshold, location?.top + location?.height / 2)
    } else if (transformOrigin?.vertical === 'center' && location) {
      return Math.max(
        marginThreshold,
        location?.top + location?.height / 2 - ref.height / 2
      )
    } else if (transformOrigin?.vertical === 'bottom' && location) {
      return Math.max(
        marginThreshold,
        location?.top + location?.height / 2 - ref.height
      )
    }
  }
}
const setPopoverLeftPosition = (
  ref: { height: number; width: number },
  marginThreshold: number,
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  location?: DOMRect
) => {
  if (anchorOrigin?.horizontal === 'left') {
    if (transformOrigin?.horizontal === 'left' && location) {
      return Math.max(marginThreshold, location.left)
    } else if (transformOrigin?.horizontal === 'center' && location) {
      return Math.max(marginThreshold, location.left - ref.width / 2)
    } else if (transformOrigin?.horizontal === 'right' && location) {
      return Math.max(marginThreshold, location.left - ref.width)
    }
  } else if (anchorOrigin?.horizontal === 'right') {
    if (transformOrigin?.horizontal === 'left' && location) {
      return Math.max(marginThreshold, location?.left + location?.width)
    } else if (transformOrigin?.horizontal === 'center' && location) {
      return Math.max(
        marginThreshold,
        location?.left + location?.width - ref.width / 2
      )
    } else if (transformOrigin?.horizontal === 'right' && location) {
      return Math.max(
        marginThreshold,
        location?.left + location?.width - ref.width
      )
    }
  } else if (anchorOrigin?.horizontal === 'center') {
    if (transformOrigin?.horizontal === 'left' && location) {
      return Math.max(marginThreshold, location?.left + location?.width / 2)
    } else if (transformOrigin?.horizontal === 'center' && location) {
      return Math.max(
        marginThreshold,
        location?.left + location?.width / 2 - ref.width / 2
      )
    } else if (transformOrigin?.horizontal === 'right' && location) {
      return Math.max(
        marginThreshold,
        location?.left + location?.width / 2 - ref.width
      )
    }
  }
}
const setPopoverPositionTopPosition = (
  anchorPosition?: { left?: number; top?: number },
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  popoverSize?: { height: number; width: number },
  mouseMove?: { x: number; y: number }
) => {
  if (mouseMove) {
    if (!transformOrigin || !transformOrigin.vertical || !popoverSize) return 0
    if (transformOrigin.vertical === 'top') {
      return mouseMove.y
    } else if (transformOrigin.vertical === 'center') {
      return mouseMove.y - popoverSize.height / 2
    } else if (transformOrigin.vertical === 'bottom') {
      return mouseMove.y - popoverSize.height
    } else {
      return 0
    }
  } else {
    if (
      !anchorPosition ||
      !anchorPosition.top ||
      !transformOrigin ||
      !transformOrigin.vertical ||
      !popoverSize
    )
      return 0

    if (transformOrigin.vertical === 'top' && anchorPosition) {
      return anchorPosition.top
    } else if (transformOrigin.vertical === 'center') {
      return anchorPosition.top - popoverSize.height / 2
    } else if (transformOrigin.vertical === 'bottom') {
      return anchorPosition.top - popoverSize.height
    } else {
      return 0
    }
  }
}
const setPopoverPositionLeftPosition = (
  anchorPosition?: { left?: number; top?: number },
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  popoverSize?: { height: number; width: number },
  mouseMove?: { x: number; y: number },
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
) => {
  if (mouseMove) {
    if (!transformOrigin || !transformOrigin.vertical || !popoverSize) return 0
    if (transformOrigin.horizontal === 'left') {
      return (
        mouseMove.x +
        (placement === 'bottom-end' ||
        placement === 'bottom-start' ||
        placement === 'top-end' ||
        placement === 'top-start'
          ? -15
          : 0)
      )
    } else if (transformOrigin.horizontal === 'center') {
      return (
        mouseMove.x -
        popoverSize.width / 2 +
        (placement === 'bottom-end' ||
        placement === 'bottom-start' ||
        placement === 'top-end' ||
        placement === 'top-start'
          ? 15
          : 0)
      )
    } else if (transformOrigin.horizontal === 'right') {
      return (
        mouseMove.x -
        popoverSize.width +
        (placement === 'bottom-end' ||
        placement === 'bottom-start' ||
        placement === 'top-end' ||
        placement === 'top-start'
          ? 15
          : 0)
      )
    } else {
      return 0
    }
  } else {
    if (
      !anchorPosition ||
      !anchorPosition.left ||
      !transformOrigin ||
      !transformOrigin.vertical ||
      !popoverSize
    )
      return 0
    if (transformOrigin.horizontal === 'left' && anchorPosition) {
      return anchorPosition.left
    } else if (transformOrigin.horizontal === 'center') {
      return anchorPosition.left - popoverSize.width / 2
    } else if (transformOrigin.horizontal === 'right') {
      return anchorPosition.left - popoverSize.width
    } else {
      return 0
    }
  }
}
export const setPopoverPosition = (
  anchorReference: 'anchorEl' | 'anchorPosition',
  marginThreshold: number,
  transformOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  anchorOrigin?: {
    horizontal?: 'center' | 'left' | 'right'
    vertical?: 'bottom' | 'center' | 'top'
  },
  anchorPosition?: { left?: number; top?: number },
  location?: DOMRect,
  popoverSize?: { height: number; width: number },
  mouseMove?: { x: number; y: number },
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
) => {
  if (anchorReference === 'anchorEl' && !mouseMove) {
    // const currentRef = popoverRef?.getBoundingClientRect()
    if (!popoverSize) return
    const top = setPopoverTopPosition(
      popoverSize,
      marginThreshold,
      transformOrigin,
      anchorOrigin,
      location
    )
    const left = setPopoverLeftPosition(
      popoverSize,
      marginThreshold,
      transformOrigin,
      anchorOrigin,
      location
    )

    return { top: top, left: left }
  } else if (
    anchorReference === 'anchorPosition' ||
    (mouseMove && anchorPosition)
  ) {
    const top = Math.max(
      marginThreshold,
      setPopoverPositionTopPosition(
        anchorPosition,
        transformOrigin,
        popoverSize,
        mouseMove
      )
    )
    const left = Math.max(
      marginThreshold,
      setPopoverPositionLeftPosition(
        anchorPosition,
        transformOrigin,
        popoverSize,
        mouseMove,
        placement
      )
    )
    // const currentRef = popoverRef?.getBoundingClientRect()
    // if (!currentRef) return
    // const transformX = setPopoverTransformX(currentRef)
    // const transformY = setPopoverTransformY(currentRef)
    return { top: top, left: left }
  }
}
export const leftMargin = (
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
) => {
  if (
    placement === 'left' ||
    placement === 'left-start' ||
    placement === 'left-end'
  ) {
    return -14
  } else {
    return 0
  }
}
export const topMargin = (
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
) => {
  if (
    placement === 'top' ||
    placement === 'top-start' ||
    placement === 'top-end'
  ) {
    return -14
  } else {
    return 0
  }
}
