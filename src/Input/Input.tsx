import classNames from 'classnames'
import { useState } from 'react'
import Clickaway from '../ClickAway/ClickAway'
interface inputProps {
  id?: string
}
export default function Input({ id }: inputProps) {
  const [touched, setTouched] = useState(false)
  return (
    <Clickaway onClickaway={() => setTouched(false)}>
      <div>
        <input
          id={id}
          onFocus={() => {
            setTouched(true)
          }}
          className={classNames('input-custom', {
            'input-custom-none': !touched,
            'input-custom-normal': touched,
          })}
        />
      </div>
    </Clickaway>
  )
}
