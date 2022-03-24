import { useState, useEffect, useRef } from 'preact/hooks'

export default function Toggle () {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useRef(null)

  useEffect(() => {
    const aside = toggle.current.parentElement
    if (isOpen) {
      aside.classList.add('shown')
    } else {
      aside.classList.remove('shown')
    }
  })

  return (
    <button className='toggle' ref={toggle} onClick={() => setIsOpen(!isOpen)}>
      <span hidden>Open</span>
      <svg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'>
        <polyline
          style={{
            stroke: 'currentColor',
            fill: 'none',
            strokeLinecap: 'round',
            strokeWidth: '5px'
          }}
          points='29.51 11.95 16.49 24.99 29.51 38.05'
        ></polyline>
      </svg>
    </button>
  )
}
