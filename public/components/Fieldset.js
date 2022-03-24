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
    field.heading = ns
    return createElement(components[field.type], {
      field: field
    })
  }
  return <div>The field cannot be read, check the settings format.</div>
}

export default function Fieldset (props) {
  return (
    <fieldset>
      <legend>{props.heading}</legend>
      {props.fields.map(field => createComponent(field, props.heading))}
    </fieldset>
  )
}
