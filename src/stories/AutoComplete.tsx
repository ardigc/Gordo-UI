// import * as React from 'react';
import { ChangeEvent, ChangeEventHandler, useState } from 'react'
export default function AutoComplete({
  options,
  label,
  onInputChange,
}: {
  options: Array<string>
  label: string
  onInputChange: (ev: ChangeEvent<HTMLInputElement>, newValue: string) => void
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
        className="border"
      />
      {open && (
        <div>
          {options.map((option, index) => (
            <div
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer hover:bg-slate-200"
              key={index}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
