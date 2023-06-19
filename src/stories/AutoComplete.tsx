// import * as React from 'react';
import { useState } from 'react'
export default function AutoComplete({ options }: { options: Array<string> }) {
  const [open, setOpen] = useState(false)
  const [value, onValue] = useState('Options')
  return (
    <div onClick={() => setOpen(!open)}>
      <input value={value} className="border"></input>
      {open && (
        <div>
          {options.map((option, index) => (
            <div
              onClick={() => onValue(option)}
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
