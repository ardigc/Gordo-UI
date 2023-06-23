import classNames from 'classnames'
import { useState } from 'react'
import Clickaway from '../ClickAway/ClickAway'
import { ElementType } from 'react'
interface InputProps {
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
  componentsProps?: {
    container?: React.HTMLAttributes<HTMLDivElement>
    input?: React.InputHTMLAttributes<HTMLInputElement>
  }
  defaultValue?: string | number | ReadonlyArray<string> | undefined
  disabled: boolean
  disaledUndeLine: boolean
}
export default function Input({
  autocomplete,
  autoFocus,
  id,
  color = 'primary',
  classes,
  components,
  componentsProps,
  defaultValue,
  disabled,
  disaledUndeLine,
}: InputProps) {
  const [touched, setTouched] = useState(false)
  const UserInput = components?.Input
  const UserComponent = components?.Container
  const RenderComponent = UserComponent ? UserComponent : 'div'
  const RenderComponentProps = UserComponent
    ? { ...componentsProps?.container }
    : {
        className: classNames(
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
        ),
      }
  return (
    <Clickaway onClickaway={() => setTouched(false)}>
      <RenderComponent {...RenderComponentProps}>
        {!UserInput && (
          <input
            defaultValue={defaultValue}
            id={id}
            autoComplete={autocomplete}
            autoFocus={autoFocus}
            className={classNames('outline-none', {
              [classes?.inputClassName || '']: classes?.inputClassName,
            })}
            onFocus={() => {
              setTouched(true)
            }}
            disabled={disabled}
          />
        )}
        {UserInput && <UserInput {...componentsProps?.input} />}
      </RenderComponent>
    </Clickaway>
  )
}
