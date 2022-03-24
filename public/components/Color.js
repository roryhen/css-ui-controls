import { useState, useEffect } from 'preact/hooks'
import { attrSafe, setCSSVar } from './utils'

export default function Color (props) {
  const { heading, label, initial } = props.field
  const [value, setValue] = useState(initial)
  const idLabel = attrSafe(label)

  function prependHash (string) {
    if (string[0] !== '#') {
      string = `#${string}`
    }
    return string
  }

  function updateValue (event) {
    setValue(prependHash(event.target.value))
  }

  useEffect(() => {
    setCSSVar(`${heading}-${label}`, value)
  })

  return (
    <div className='form-row'>
      <label for={idLabel}>{label}</label>
      <input
        type='color'
        id={idLabel}
        value={value}
        onInput={e => updateValue(e)}
      />
      <input
        type='text'
        size={7}
        maxLength={7}
        value={value}
        onInput={e => updateValue(e)}
        className='reactive-input'
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
