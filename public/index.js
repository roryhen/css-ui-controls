import { render } from 'preact'
import components from './components.js'
import settings from './settings.js'
import Toggle from './components/Toggle.js'
import './style.scss'

function App () {
  return (
    <>
      <Toggle />
      <div className='panel'>
        <form className='controls'>
          <h2>Settings</h2>
          {settings.map(field => components(field))}
        </form>
      </div>
    </>
  )
}

render(<App />, document.querySelector('aside'))
