import { nanoid } from 'nanoid'

const fontScales = [1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618]

const config = [
  {
    heading: 'Typography'
  },
  {
    heading: 'Size',
    fields: [
      {
        type: 'range',
        label: 'Text Size',
        min: 0.5,
        max: 5,
        step: 0.1,
        initial: 1
      }
    ]
  },
  {
    heading: 'Scale',
    fields: [
      {
        type: 'select',
        label: 'Font Scale',
        options: fontScales,
        initial: fontScales[1]
      }
    ]
  },
  {
    heading: 'Text Colors',
    fields: [
      { type: 'color', label: 'Main', initial: '#000000' },
      { type: 'color', label: 'Accent', initial: '#000000' }
    ]
  },
  {
    heading: 'Box'
  },
  {
    heading: 'Colors',
    fields: [
      { type: 'color', label: 'Main', initial: '#000000' },
      { type: 'color', label: 'Accent', initial: '#000000' },
      { type: 'color', label: 'BG Color', initial: '#eeeeee' }
    ]
  },
  {
    heading: 'Borders',
    fields: [
      {
        type: 'range',
        label: 'Radius',
        min: 0,
        max: 20,
        step: 0.1,
        initial: 1
      }
    ]
  },
  {
    heading: 'Spacing',
    fields: [
      { type: 'range', label: 'Inner', min: 0, max: 10, step: 0.1, initial: 1 },
      { type: 'range', label: 'Outer', min: 0, max: 10, step: 0.1, initial: 1 }
    ]
  }
]

const settings = config.map(setting => {
  setting.id = nanoid()
  return setting
})

export default settings
