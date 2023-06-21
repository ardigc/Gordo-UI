import { useState } from 'react'
import classNames from 'classnames'

export interface TextField {
  label?: string
  variant?: 'filled'
}
export default function TextField({ label, variant }: TextField) {
  const [touched, setTouched] = useState(false)
  return (
    <div className="relative inline-flex">
      <label
        className={classNames('label-text-field', {
          'normal-label-text-field': !touched,
          'mini-label-text-field': touched,
        })}
      >
        {label}
      </label>
      <div>
        <input onFocus={() => setTouched(true)} className="input-text-field" />
      </div>
    </div>
  )
}
