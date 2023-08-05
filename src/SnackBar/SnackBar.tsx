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
import Paper from '../Paper/Paper'
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
  transition?:'fade'|'slideUp'
}

export default function SnackBar({
  children,
  message,
  open,
  action,
  onClose,
  autoHideDuration,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transition='fade',
  ...rest
}: SnackBarProps) {
  const [visible, setVisible] = useState(false)
  const timeOutRef = useRef<NodeJS.Timeout | null>(null)
  if (autoHideDuration && !timeOutRef.current) {
    timeOutRef.current = setTimeout(() => {
      timeOutRef.current = null
      if (!onClose) return
      onClose(null, 'timeout')
    }, autoHideDuration)
  }

  useEffect(() => {
    if (open === true) {
      setVisible(Boolean(open))
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
    return () => {
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
            className={classNames(
              ' z-50 flex justify-start items-center fixed transition-all',
              {
                'animate-opacity0 opacity-0': !open&&transition==='fade',
                'animate-opacity':open&&transition==='fade',
                // '-translate-y-52': !open&&transition==='slideUp',
                'animate-slideUpRev -translate-y-[100vh]': !open&&transition==='slideUp',
                'animate-slideUp':transition==='slideUp',
                ' left-2 right-2  sm:left-6 sm:right-auto':
                  anchorOrigin.horizontal === 'left',
                ' left-2 right-2  sm:left-1/2 sm:right-auto sm:-translate-x-1/2':
                  anchorOrigin.horizontal === 'center',
                ' left-2 right-2  sm:left-auto sm:right-6':
                  anchorOrigin.horizontal === 'right',
                'sm:bottom-6 bottom-2 ': anchorOrigin.vertical === 'bottom',
                'sm:top-6 top-2 ': anchorOrigin.vertical === 'top',
              }
            )}
            onAnimationEnd={() => setVisible(Boolean(open))}
            {...rest}
          >
            {children && children}
            {!children && (
              <Paper
                className={classNames(
                  'font-base font-normal text-base text-white grow bg-[#323232] flex px-4 py-[6px] items-center flex-wrap sm:min-w-[288px] sm:grow-[initial]'
                )}
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
