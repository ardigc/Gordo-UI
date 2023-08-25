import classNames from 'classnames'
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react'

import { createPortal } from 'react-dom'
import { RenderComponent } from './RenderComponent'
import { PaperProps } from '../main'

type PopoverReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface PopoverProps extends PopoverReactProps {
  children?: ReactNode
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
  anchorPosition?: { left?: number; top?: number }
  className?: string
  container?: Element | (() => Element)
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
  marginThreshold?: number
  componentProps?: { paper?: PaperProps; root?: () => void | object }
  components?: { paper?: ElementType; root?: ElementType }
  id?: string
  disableTransition?: boolean
  classes?: { root?: string; paper?: string }
  // Transition component will be render when we implent transition library
  // TransitionComponent?: ElementType
  // transitionDuration?:'auto'| number| { appear?: number, enter?: number, exit?: number }
  // TransitionProps?: object
}
export function Popover({
  children,
  open,
  onClose,
  anchorReference = 'anchorEl',
  anchorEl,
  anchorOrigin = { vertical: 'top', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  anchorPosition = { top: 0, left: 0 },
  className,
  container,
  elevation = 4,
  components,
  marginThreshold = 16,
  componentProps,
  id,
  disableTransition,
  classes,
  ...rest
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (open) {
      setIsOpen(true)
    }
  }, [open])
  const RenderRoot = components?.root ? components.root : 'div'
  function resolveContainer(container: Element | (() => Element)) {
    return typeof container === 'function' ? container() : container
  }
  const animationEndHandler = () => {
    if (!open) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {isOpen &&
        createPortal(
          <RenderRoot
            id={id}
            {...componentProps?.root}
            className={classNames('fixed inset-0 z-[1300] ', {
              [classes?.root || '']: classes?.root,
            })}
            {...rest}
          >
            <div
              onClick={onClose}
              className={classNames('fixed inset-0 flex bg-transparent -z-[1]')}
            ></div>
            <RenderComponent
              onAnimationEnd={animationEndHandler}
              {...componentProps?.paper}
              marginThreshold={marginThreshold}
              anchorEl={anchorEl}
              components={components}
              anchorPosition={anchorPosition}
              anchorReference={anchorReference}
              transformOrigin={transformOrigin}
              // screenVariation={screenVariation}
              anchorOrigin={anchorOrigin}
              className={classNames(
                'absolute  bg-transparent rounded-[4px]  ',
                {
                  'animate-grow': open && !disableTransition,
                  'animate-dwarf': !open && !disableTransition,
                  'shadow-1': elevation === 1,
                  'shadow-2': elevation === 2,
                  'shadow-3': elevation === 3,
                  'shadow-4': elevation === 4,
                  'shadow-5': elevation === 5,
                  'shadow-6': elevation === 6,
                  'shadow-7': elevation === 7,
                  'shadow-8': elevation === 8,
                  'shadow-9': elevation === 9,
                  'shadow-10': elevation === 10,
                  'shadow-11': elevation === 11,
                  'shadow-12': elevation === 12,
                  'shadow-13': elevation === 13,
                  'shadow-14': elevation === 14,
                  [classes?.paper || '']: classes?.paper,
                  [className || '']: className,
                }
              )}
            >
              {children}
            </RenderComponent>
          </RenderRoot>,
          container ? resolveContainer(container) : document.body
        )}
    </>
  )
}
