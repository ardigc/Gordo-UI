import { useState } from 'react'
import classNames from 'classnames'

export interface TextField {
  label?: string
  variant?: 'filled'
  classes?:{labelClassName:string}
}
export default function TextField({ label, variant, classes }: TextField) {
  const [touched, setTouched] = useState(false)
  const labelClassName= classes?.labelClassName
  return (
    <div className="relative inline-flex">
      <label
        className={classNames('label-text-field','text-lg cursor-text' ,{
          'normal-label-text-field-filled': !touched,
          'mini-label-text-field-filled': touched,
          [labelClassName||''] : labelClassName,
        })}
        htmlFor='filled-input'
      >
        {label}
      </label>
      <div>
        <input id='filled-input' onFocus={() => setTouched(true)} className="input-text-field" />
      </div>
    </div>
  )
}
