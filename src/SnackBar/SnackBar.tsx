import classNames from 'classnames'
import {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import Paper, { PaperProps } from '../Paper/Paper'
import Clickaway from '../ClickAway/ClickAway'

type DivReactProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface SnackBarProps extends DivReactProps {
  children?: ReactNode
  message?: ReactNode
  open?: boolean
  action?: ReactNode
  onClose?: (ev: Event | KeyboardEvent | null, reason: string) => void
  autoHideDuration?: number
  anchorOrigin?: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'top'
  }
  transition?:
    | 'fade'
    | 'grown'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
  className?: string
  ContentProps?: PaperProps
  disableWindowBlurListener?: boolean
  key:any
  resumeHideDuration:number
}

export default function SnackBar({
  children,
  message,
  open,
  action,
  onClose,
  autoHideDuration,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transition = 'grown',
  className,
  ContentProps,
  disableWindowBlurListener,
  key,
  resumeHideDuration,
  ...rest
}: SnackBarProps) {
  const [visible, setVisible] = useState(false)
  const timeOutRef = useRef<NodeJS.Timeout | null>(null)
  if (autoHideDuration && !timeOutRef.current && open) {
    timeOutRef.current = setTimeout(() => {
      timeOutRef.current = null
      if (!onClose) return
      onClose(null, 'timeout')
    }, autoHideDuration)
  }

  useEffect(() => {
    if (open === true) {
      setVisible(Boolean(open))
    } else if (open === false) {
      setTimeout(() => {
        setVisible(Boolean(open))
      }, 200)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (open && onClose) {
          onClose(event, 'escapeKeyDown')
        }
      }
    }
    const handleKeyDownListener = (event: Event) =>
      handleKeyDown(event as unknown as KeyboardEvent)
    document.addEventListener('keydown', handleKeyDownListener)

    if (timeOutRef.current && !open) {
      clearTimeout(timeOutRef.current)
      timeOutRef.current = null
    }

    const handleFocus = () => {
      if (autoHideDuration && !timeOutRef.current && open) {
        timeOutRef.current = setTimeout(() => {
          timeOutRef.current = null
          if (!onClose) return
          onClose(null, 'timeout')
        },resumeHideDuration?resumeHideDuration: autoHideDuration/2)
      }
    }

    const handleBlur = () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current)
        timeOutRef.current = null
      }
    }
    if (!disableWindowBlurListener) {
      window.addEventListener('focus', handleFocus)
      window.addEventListener('blur', handleBlur)
    }
    return () => {
      if (!disableWindowBlurListener) {
        window.removeEventListener('focus', handleFocus)
        window.removeEventListener('blur', handleBlur)
      }
      document.removeEventListener('keydown', handleKeyDownListener)
    }
  }, [open])

  const clickAwayHandle = (ev: MouseEvent | TouchEvent) => {
    if (!onClose) {
      return
    }
    onClose(ev, 'clickAway')
  }

  return (
    <>
      {visible && (
        <Clickaway onClickaway={clickAwayHandle}>
          <div
          key={key}
            className={classNames(
              ' z-50 flex justify-start items-center fixed transition-all',
              {
                ' left-2 right-2  sm:left-6 sm:right-auto':
                  anchorOrigin.horizontal === 'left',
                ' left-2 right-2  sm:left-1/2 sm:right-auto sm:-translate-x-1/2':
                  anchorOrigin.horizontal === 'center',
                ' left-2 right-2  sm:left-auto sm:right-6':
                  anchorOrigin.horizontal === 'right',
                'sm:bottom-6 bottom-2 ': anchorOrigin.vertical === 'bottom',
                'sm:top-6 top-2 ': anchorOrigin.vertical === 'top',
                [className || '']: className,
              }
            )}
            {...rest}
          >
            {children && (
              <div
                className={classNames({
                  'animate-slideUpBottom':
                    transition === 'slideUp' &&
                    anchorOrigin.vertical === 'bottom',
                  'animate-slideUpRevBottom -translate-y-[100vh]':
                    !open &&
                    transition === 'slideUp' &&
                    anchorOrigin.vertical === 'bottom',
                  'animate-slideUpTop':
                    open &&
                    transition === 'slideUp' &&
                    anchorOrigin.vertical === 'top',
                  'animate-slideUpRevTop -translate-y-[15vh]':
                    !open &&
                    transition === 'slideUp' &&
                    anchorOrigin.vertical === 'top',
                  'animate-slideDownBottom':
                    transition === 'slideDown' &&
                    anchorOrigin.vertical === 'bottom',
                  'animate-slideDownRevBottom -translate-y-[100vh]':
                    !open &&
                    transition === 'slideDown' &&
                    anchorOrigin.vertical === 'bottom',
                  'animate-slideDownTop':
                    open &&
                    transition === 'slideDown' &&
                    anchorOrigin.vertical === 'top',
                  'animate-slideDownRevTop -translate-y-[15vh]':
                    !open &&
                    transition === 'slideDown' &&
                    anchorOrigin.vertical === 'top',
                  'animate-slideLeftLeft':
                    transition === 'slideLeft' &&
                    anchorOrigin.horizontal === 'left',
                  'animate-slideLeftRevLeft -translate-x-[50vh]':
                    !open &&
                    transition === 'slideLeft' &&
                    anchorOrigin.horizontal === 'left',
                  'animate-slideLeftRight':
                    open &&
                    transition === 'slideLeft' &&
                    (anchorOrigin.horizontal === 'right' || 'center'),
                  'animate-slideLeftRevRight -translate-x-[300vh]':
                    !open &&
                    transition === 'slideLeft' &&
                    (anchorOrigin.horizontal === 'right' || 'center'),
                  'animate-slideRightRight':
                    open &&
                    transition === 'slideRight' &&
                    anchorOrigin.horizontal === 'right',
                  'animate-slideRightRevRight translate-x-[30vh]':
                    !open &&
                    transition === 'slideRight' &&
                    anchorOrigin.horizontal === 'right',
                  'animate-slideRightLeft':
                    open &&
                    transition === 'slideRight' &&
                    (anchorOrigin.horizontal === 'left' || 'center'),
                  'animate-slideRightRevLeft translate-x-[300vh]':
                    !open &&
                    transition === 'slideRight' &&
                    (anchorOrigin.horizontal === 'left' || 'center'),

                  'animate-opacity0 opacity-0': !open && transition === 'fade',
                  'animate-opacity': open && transition === 'fade',
                  'animate-dwarf opacity-0': !open && transition === 'grown',
                  'animate-grow': open && transition === 'grown',
                })}
              >
                {children}
              </div>
            )}
            {!children && (
              <Paper
                className={classNames(
                  'font-base font-normal text-base text-white grow bg-[#323232] flex px-4 py-[6px] items-center flex-wrap sm:min-w-[288px] sm:grow-[initial]',
                  {
                    'animate-slideUpBottom':
                      transition === 'slideUp' &&
                      anchorOrigin.vertical === 'bottom',
                    'animate-slideUpRevBottom -translate-y-[100vh]':
                      !open &&
                      transition === 'slideUp' &&
                      anchorOrigin.vertical === 'bottom',
                    'animate-slideUpTop':
                      open &&
                      transition === 'slideUp' &&
                      anchorOrigin.vertical === 'top',
                    'animate-slideUpRevTop -translate-y-[15vh]':
                      !open &&
                      transition === 'slideUp' &&
                      anchorOrigin.vertical === 'top',
                    'animate-slideDownBottom':
                      transition === 'slideDown' &&
                      anchorOrigin.vertical === 'bottom',
                    'animate-slideDownRevBottom -translate-y-[100vh]':
                      !open &&
                      transition === 'slideDown' &&
                      anchorOrigin.vertical === 'bottom',
                    'animate-slideDownTop':
                      open &&
                      transition === 'slideDown' &&
                      anchorOrigin.vertical === 'top',
                    'animate-slideDownRevTop -translate-y-[15vh]':
                      !open &&
                      transition === 'slideDown' &&
                      anchorOrigin.vertical === 'top',
                    'animate-slideLeftLeft':
                      transition === 'slideLeft' &&
                      anchorOrigin.horizontal === 'left',
                    'animate-slideLeftRevLeft -translate-x-[50vh]':
                      !open &&
                      transition === 'slideLeft' &&
                      anchorOrigin.horizontal === 'left',
                    'animate-slideLeftRight':
                      open &&
                      transition === 'slideLeft' &&
                      (anchorOrigin.horizontal === 'right' || 'center'),
                    'animate-slideLeftRevRight -translate-x-[300vh]':
                      !open &&
                      transition === 'slideLeft' &&
                      (anchorOrigin.horizontal === 'right' || 'center'),
                    'animate-slideRightRight':
                      open &&
                      transition === 'slideRight' &&
                      anchorOrigin.horizontal === 'right',
                    'animate-slideRightRevRight translate-x-[30vh]':
                      !open &&
                      transition === 'slideRight' &&
                      anchorOrigin.horizontal === 'right',
                    'animate-slideRightLeft':
                      open &&
                      transition === 'slideRight' &&
                      (anchorOrigin.horizontal === 'left' || 'center'),
                    'animate-slideRightRevLeft translate-x-[300vh]':
                      !open &&
                      transition === 'slideRight' &&
                      (anchorOrigin.horizontal === 'left' || 'center'),

                    'animate-opacity0 opacity-0':
                      !open && transition === 'fade',
                    'animate-opacity': open && transition === 'fade',
                    'animate-dwarf opacity-0': !open && transition === 'grown',
                    'animate-grow': open && transition === 'grown',
                  }
                )}
                // onAnimationEnd={() =>{ console.log(open),setVisible(Boolean(open))}}
                {...ContentProps}
              >
                <div className={classNames('py-2')}>{message}</div>
                {action && (
                  <div className="flex items-center ml-auto pl-4 -mr-2">
                    {action}
                  </div>
                )}
              </Paper>
            )}
          </div>
        </Clickaway>
      )}
    </>
  )
}
