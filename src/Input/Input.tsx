import classNames from 'classnames'
import { useState } from 'react'
import Clickaway from '../ClickAway/ClickAway'
interface inputProps {
  autocomplete?: string
  id?: string
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
  autoFocus?: boolean
  clases?: {
    constainerClassName?: string
    inputClassName?: string
  }
}
export default function Input({
  autocomplete,
  autoFocus,
  id,
  color = 'primary',
}: inputProps) {
  const [touched, setTouched] = useState(false)
  return (
    <Clickaway onClickaway={() => setTouched(false)}>
      <div
        className={classNames(
          'input-custom after:border-b-2 flex flex-col relative ',
          {
            'after:border-b-primary-color': color === 'primary',
            'after:border-b-secundary-color': color === 'secundary',
            'after:border-b-error-color': color === 'error',
            'after:border-b-warning-color': color === 'warning',
            'after:border-b-info-color': color === 'info',
            'after:border-b-success-color': color === 'success',
            'input-custom-none ': !touched,
            'input-custom-normal': touched,
          }
        )}
      >
        <input
          id={id}
          autoComplete={autocomplete}
          autoFocus={autoFocus}
          className={classNames('outline-none')}
          onFocus={() => {
            setTouched(true)
          }}
        />
      </div>
    </Clickaway>
  )
}
