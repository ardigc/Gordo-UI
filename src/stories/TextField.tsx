import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import classNames from 'classnames'

export interface TextField {
  label?: string
  variant?: 'filled'
  classes?:{labelClassName?:string, inputContainerClassName?:string, inputClassName?:string}
  onChange?: (ev: ChangeEvent<HTMLInputElement>)=>void
}
export default function TextField({ label, variant, classes, onChange }: TextField) {
  const [touched, setTouched] = useState(false)
  const [value, setValue]= useState('')
  const labelClassName= classes?.labelClassName
  const changeEventHandler: ChangeEventHandler<HTMLInputElement> = (ev)=>{
    setValue(ev.currentTarget.value)
   if (onChange) {
     onChange(ev)
  } 
    
  }
  return (
    <div className="relative inline-flex" onBlur={()=>{ if(value.length<1){setTouched(false)}}}>
      <label
        className={classNames('label-text-field','text-lg cursor-text' ,{
          'normal-label-text-field-filled': !touched,
          'mini-label-text-field-filled text-blue-600': touched,
          [labelClassName||''] : labelClassName,
        })}
        htmlFor='filled-input'
      >
        {label}
      </label>
      <div className={classNames('input-div-filled after:border-b-2 after:border-b-blue-600',{'input-div-filled-none ':!touched, 'input-div-filled-normal':touched,[classes?.inputContainerClassName||'']: classes?.inputContainerClassName})}>
        <input id='filled-input' onChange={(ev)=> changeEventHandler(ev)} onFocus={() =>setTouched(true)} className={classNames("input-text-field outline-none bg-gray-100 rounded-sm",{[classes?.inputClassName||'']: classes?.inputClassName})} />
            </div>
           
    </div>
  )
}
