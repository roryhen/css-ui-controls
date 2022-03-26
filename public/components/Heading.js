import { createElement } from 'preact'

export default function Heading ({ level, text }) {
  if ([1, 2, 3, 4, 5, 6].includes(level)) {
    const hTag = `h${level}`
    return createElement(hTag, { className: hTag }, text)
  }
  return <h3>{text}</h3>
}
