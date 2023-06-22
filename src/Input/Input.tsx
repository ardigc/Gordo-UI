import classNames from 'classnames'
import { useState } from 'react'
import Clickaway from '../ClickAway/ClickAway'
import { ElementType } from 'react'
interface inputProps {
  autocomplete?: string
  id?: string
  color?: 'primary' | 'secundary' | 'error' | 'warning' | 'info' | 'success'
  autoFocus?: boolean
  classes?: {
    constainerClassName?: string
    inputClassName?: string
  }
  components?: {
    Input?: ElementType
    Container?: ElementType
  }
}
export default function Input({
  autocomplete,
  autoFocus,
  id,
  color = 'primary',
  classes,
  components,
}: inputProps) {
  const [touched, setTouched] = useState(false)
  const UserInput = components?.Input
  return (
    <Clickaway onClickaway={() => setTouched(false)}>
      <div
        className={classNames(
          'input-custom hover:before:border-t-2 before:border-black after:border-b-2 before:border-t flex flex-col relative ',
          {
            'after:border-b-primary-color': color === 'primary',
            'after:border-b-secundary-color': color === 'secundary',
            'after:border-b-error-color': color === 'error',
            'after:border-b-warning-color': color === 'warning',
            'after:border-b-info-color': color === 'info',
            'after:border-b-success-color': color === 'success',
            'input-custom-none ': !touched,
            'input-custom-normal': touched,
            [classes?.constainerClassName || '']: classes?.constainerClassName,
          }
        )}
      >
        {!UserInput && (
          <input
            id={id}
            autoComplete={autocomplete}
            autoFocus={autoFocus}
            className={classNames('outline-none', {
              [classes?.inputClassName || '']: classes?.inputClassName,
            })}
            onFocus={() => {
              setTouched(true)
            }}
          />
        )}
        {UserInput && <UserInput />}
      </div>
    </Clickaway>
  )
}
