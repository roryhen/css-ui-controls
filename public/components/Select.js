import { useState, useEffect } from 'preact/hooks'
import { attrSafe, setCSSVar } from './utils'

export default function Select (props) {
  const { heading, label, options, initial } = props.field
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
      <select id={idLabel} value={value} onChange={e => updateValue(e)}>
        {options.map(opt => (
          <option>{opt}</option>
        ))}
      </select>
      <input
        type='number'
        value={value}
        step={0.01}
        onChange={e => updateValue(e)}
        className={'reactive-input'}
      />
      <input
        type='button'
        value={'\u27F2'}
        onClick={() => setValue(initial)}
        className='reset'
      />
    </div>
  )
}
