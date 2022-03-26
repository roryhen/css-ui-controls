import Heading from './components/Heading'
import Fieldset from './components/Fieldset'

export default function (field) {
  if (typeof field.fields !== 'undefined') {
    return <Fieldset heading={field.heading} fields={field.fields} />
  } else if (typeof field.heading !== 'undefined') {
    return <Heading level={3} text={field.heading} />
  }
  return <div>The field cannot be read, check the settings format.</div>
}
