import { useState } from 'react'

export interface TextField {
  label?: string
  variant?: 'filled'
}
export default function TextField({ label, variant }: TextField) {
  const [touched, setTouched] = useState(false)
  return (
    <div className="relative inline-flex items-center">
      <label className="absolute">{label}</label>
      <div>
        <input
          onFocus={() => setTouched(true)}
          className="boder pt-5 pb-2 pr-3"
        />
      </div>
    </div>
  )
}
