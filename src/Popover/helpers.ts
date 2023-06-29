export const setPopoverTopPosition = (ref: DOMRect) => {
  if (anchorOrigin.vertical === 'top') {
    if (transformOrigin.vertical === 'top' && location) {
      return Math.max(marginThreshold, location.top)
    } else if (transformOrigin.vertical === 'center' && location) {
      return Math.max(marginThreshold, location.top - ref.height / 2)
    } else if (transformOrigin.vertical === 'bottom' && location) {
      return Math.max(marginThreshold, location.top - ref.height)
    }
  } else if (anchorOrigin.vertical === 'bottom') {
    if (transformOrigin.vertical === 'top' && location) {
      return Math.max(marginThreshold, location?.top + location?.height)
    } else if (transformOrigin.vertical === 'center' && location) {
      return Math.max(
        marginThreshold,
        location?.top + location?.height - ref.height / 2
      )
    } else if (transformOrigin.vertical === 'bottom' && location) {
      return Math.max(
        marginThreshold,
        location?.top + location?.height - ref.height
      )
    }
  } else if (anchorOrigin.vertical === 'center') {
    if (!location) return
    if (transformOrigin.vertical === 'top' && location) {
      return Math.max(marginThreshold, location?.top + location?.height / 2)
    } else if (transformOrigin.vertical === 'center' && location) {
      return Math.max(
        marginThreshold,
        location?.top + location?.height / 2 - ref.height / 2
      )
    } else if (transformOrigin.vertical === 'bottom' && location) {
      return Math.max(
        marginThreshold,
        location?.top + location?.height / 2 - ref.height
      )
    }
  }
}

export const setPopoverLeftPosition = (
  ref: DOMRect,
  transformOrigin: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  },
  anchorOrigin: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  },
  marginThreshold: number
) => {
  console.log('ref:', ref, transformOrigin)
  if (anchorOrigin.horizontal === 'left') {
    if (transformOrigin.horizontal === 'left' && location) {
      return Math.max(marginThreshold, location.left)
    } else if (transformOrigin.horizontal === 'center' && location) {
      return Math.max(marginThreshold, location.left - ref.width / 2)
    } else if (transformOrigin.horizontal === 'right' && location) {
      return Math.max(marginThreshold, location.left - ref.width)
    }
  } else if (anchorOrigin.horizontal === 'right') {
    if (transformOrigin.horizontal === 'left' && location) {
      return Math.max(marginThreshold, location?.left + location?.width)
    } else if (transformOrigin.horizontal === 'center' && location) {
      return Math.max(
        marginThreshold,
        location?.left + location?.width - ref.width / 2
      )
    } else if (transformOrigin.horizontal === 'right' && location) {
      return Math.max(
        marginThreshold,
        location?.left + location?.width - ref.width
      )
    }
  } else if (anchorOrigin.horizontal === 'center') {
    if (transformOrigin.horizontal === 'left' && location) {
      return Math.max(marginThreshold, location?.left + location?.width / 2)
    } else if (transformOrigin.horizontal === 'center' && location) {
      return Math.max(
        marginThreshold,
        location?.left + location?.width / 2 - ref.width / 2
      )
    } else if (transformOrigin.horizontal === 'right' && location) {
      return Math.max(
        marginThreshold,
        location?.left + location?.width / 2 - ref.width
      )
    }
  }
}
export const setPopoverPosition = (
  anchorReference: 'anchorEl' | 'anchorPosition',
  marginThreshold: number,
  transformOrigin: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  },
  anchorOrigin: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'center' | 'top'
  },
  popoverLocation?: DOMRect
) => {
  if (anchorReference === 'anchorEl') {
    // const currentRef = popoverRef?.getBoundingClientRect()
    if (!popoverLocation) return
    const top = setPopoverTopPosition(popoverLocation)
    const left = setPopoverLeftPosition(
      popoverLocation,
      transformOrigin,
      anchorOrigin,
      marginThreshold
    )

    // const transformX = setPopoverTransformX(currentRef)
    // const transformY = setPopoverTransformY(currentRef)
    // console.log(transformX, transformY)
    return { top: top, left: left }
    //   } else if (anchorReference === 'anchorPosition') {
    //     const top = `${Math.max(marginThreshold, anchorPosition.top!)}px`
    //     const left = `${Math.max(marginThreshold, anchorPosition.left!)}px`
    //     // const currentRef = popoverRef?.getBoundingClientRect()
    //     // if (!currentRef) return
    //     const transformX = setPopoverTransformX(currentRef)
    //     const transformY = setPopoverTransformY(currentRef)
    //     return { top: top, left: left, transformX, transformY }
  }
}
