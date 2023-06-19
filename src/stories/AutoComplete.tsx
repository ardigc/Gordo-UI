// import * as React from 'react';
import { useState } from 'react'
export default function AutoComplete({ options }: { options: Array<string> }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <input className="border" onClick={() => setOpen(!open)}></input>
      {open && (
        <div>
          {options.map((option) => (
            <div>{option}</div>
          ))}
        </div>
      )}
    </div>
  )
}
