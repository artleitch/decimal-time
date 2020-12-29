import './App.css'
import './components/DigitalClock/DigitalClock'
import DigitalClock from './components/DigitalClock/DigitalClock'

/*
	Plan of attack:
	 - Get current time in unix timestamp
	 - Convert to 10 hour/100 minute/100 second representation
	 - Extend this to allow for any amount of hours/minutes/seconds
	 - Show as digital clock
	 - Show as analogue clock
*/

function App() {
  return (
    <div className="App">
      <DigitalClock></DigitalClock>
    </div>
  )
}

export default App
