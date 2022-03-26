import { useState, useEffect } from 'preact/hooks'
import { attrSafe, setCSSVar } from './utils'

export default function Range (props) {
  const { heading, label, min, max, step, initial } = props.field
  const [value, setValue] = useState(initial)
  const idLabel = attrSafe(label)

  function updateValue (event) {
    setValue(event.target.value)
  }

  useEffect(() => {
    setCSSVar(`${heading}-${label}`, value)
  })

  return (
    <div className='form-row'>
      <label for={idLabel}>{label}</label>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        id={idLabel}
        value={value}
        onInput={e => updateValue(e)}
      />
      <input
        type='number'
        step={step}
        max={max}
        pattern='\d*'
        value={value}
        onInput={e => updateValue(e)}
        className={'reactive-input'}
      />
      <input
        type='button'
        value={'\u21BA'}
        onClick={() => setValue(initial)}
        className='reset'
      />
    </div>
  )
}
