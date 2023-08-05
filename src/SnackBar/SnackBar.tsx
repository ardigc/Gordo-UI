import classNames from 'classnames'
import {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useEffect,
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
  onClose?:(ev:Event|KeyboardEvent, reason:string) => void
}

export default function SnackBar({
  children,
  message,
  open,
  action,
  onClose,
  ...rest
}: SnackBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open === true) {
      setVisible(Boolean(open))
    }
  }, [open])
  useEffect(() => {
    const handleKeyDown = (event:KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (open && onClose) {
          onClose(event, 'keyPress');
        }
      }
    };

    // document.addEventListener('keydown', handleKeyDown);

    // return () => {
    //   document.removeEventListener('keydown', handleKeyDown);
    // };
    const handleKeyDownListener = (event: Event) => handleKeyDown(event as unknown as KeyboardEvent);
    document.addEventListener('keydown', handleKeyDownListener);

    return () => {
      document.removeEventListener('keydown', handleKeyDownListener);
    };
  }, [open]);
const clickAwayHandle= (ev:MouseEvent|TouchEvent)=>{
  if (!onClose) {
    return
  }
onClose(ev,'clickAway')
}
  return (
    <>
      {visible && (
        <Clickaway onClickaway={clickAwayHandle}>
        <div
          className={classNames(
            '  fixed bottom-2 left-2 right-2 z-50 flex justify-start items-center sm:bottom-6 sm:left-6 sm:right-auto animate-opacity',
            { 'animate-opacity0 opacity-0': !open }
            )}
            onAnimationEnd={() => setVisible(Boolean(open))}
            {...rest}
            >
          <Paper
            className={classNames(
              'font-base font-normal text-base text-white grow bg-[#323232] flex px-4 py-[6px] items-center flex-wrap sm:min-w-[288px] sm:grow-[initial]'
              )}
              >
            <div className={classNames('py-2')}>{message}</div>
            {action&&<div className='flex items-center ml-auto pl-4 -mr-2'>{action}</div>}
          </Paper>
        </div>
      </Clickaway>
      )}
    </>
  )
}
