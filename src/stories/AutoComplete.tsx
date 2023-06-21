// import * as React from 'react';
import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import Option from './Option'
export default function AutoComplete({
  options,
  label,
  onInputChange,
  classes,
}: {
  options: Array<string>
  label: string
  onInputChange: (ev: ChangeEvent<HTMLInputElement>, newValue: string) => void
  classes?: {
    inputClassname?: string
    optionsClassName?: string
    optionClassName?: string
  }
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(label)
  const changeEventHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
    const target = ev.currentTarget
    setValue(target.value)
    onInputChange(ev, target.value)
  }
  const handleOptionClick = (option: string) => {
    setValue(option)
    const fakeEvent = {
      currentTarget: {
        value: option,
      },
    } as ChangeEvent<HTMLInputElement>
    changeEventHandler(fakeEvent)
  }

  return (
    <div onClick={() => setOpen(!open)}>
      <input
        type="text"
        onChange={changeEventHandler}
        value={value}
        className={classes?.inputClassname}
      />
      {open && (
        <div className={classes?.optionsClassName}>
          {options.map((option, index) => (
            <Option
              onClick={() => handleOptionClick(option)}
              className={classes?.optionClassName}
              key={index}
            >
              {option}
            </Option>
          ))}
        </div>
      )}
    </div>
  )
}
