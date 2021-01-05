import './App.css'
import './components/DigitalClock/DigitalClock'
import DigitalClock from './components/DigitalClock/DigitalClock'
import React, { useState } from 'react'

/*
	Plan of attack:
	 - Get current time in unix timestamp
	 - Convert to 10 hour/100 minute/100 second representation
	 - Extend this to allow for any amount of hours/minutes/seconds
	 - Show as digital clock
	 - Show as analogue clock
*/

function App() {
  const [hoursDInDay, setHoursDInDay] = useState(10)
  const [minutesDInHour, setMinutesDInHour] = useState(100)
  const [secondsDInMinute, setSecondsDInMinute] = useState(1000)

  return (
    <div className="App">
      <div>
        <label>hoursDInDay: </label>
        <input
          name="hoursDInDay"
          value={hoursDInDay}
          onChange={(e) => setHoursDInDay(e.target.value)}
          type="number"
        />
      </div>
      <div>
        <label>minutesDInHour: </label>
        <input
          name="minutesDInHour"
          value={minutesDInHour}
          onChange={(e) => setMinutesDInHour(e.target.value)}
          type="number"
        />
      </div>
      <div>
        <label>secondssDInMinute: </label>
        <input
          name="secondsDInMinute"
          value={secondsDInMinute}
          onChange={(e) => setSecondsDInMinute(e.target.value)}
          type="number"
        />
      </div>
      <DigitalClock
        hoursDInDay={hoursDInDay}
        minutesDInHour={minutesDInHour}
        secondssDInMinute={secondsDInMinute}
      ></DigitalClock>
    </div>
  )
}

export default App
