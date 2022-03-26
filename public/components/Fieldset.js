import { createElement } from 'preact'
import Range from './Range'
import Color from './Color'
import Select from './Select'

const components = {
  range: Range,
  color: Color,
  select: Select
}

function createComponent (field, ns) {
  if (typeof field.type !== 'undefined' && field.type in components) {
    return createElement(components[field.type], {
      field: { heading: ns, ...field }
    })
  }
  return <div>The field cannot be read, check the settings format.</div>
}

export default function Fieldset ({ heading, fields }) {
  return (
    <fieldset>
      <legend>{heading}</legend>
      {fields.map(field => createComponent(field, heading))}
    </fieldset>
  )
}
