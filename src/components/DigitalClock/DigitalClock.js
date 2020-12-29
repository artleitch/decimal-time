import React, { useState } from 'react'

const HOURSD_IN_DAY = 10
const MINUTESD_IN_HOURD = 100
const SECONDSD_IN_MINUTED = 100

const getHourD = (fractionOfDay) => {
  return Math.floor(fractionOfDay * HOURSD_IN_DAY)
}

const getMinuteD = (fractionOfDay) => {
  return Math.floor(
    Math.floor(
      (fractionOfDay * getSecondsDinDayD() -
        getHourD(fractionOfDay) * MINUTESD_IN_HOURD * SECONDSD_IN_MINUTED) /
        SECONDSD_IN_MINUTED
    )
  )
}

const getSecondD = (fractionOfDay) => {
  return Math.floor(
    fractionOfDay * getSecondsDinDayD() -
      getHourD(fractionOfDay) * MINUTESD_IN_HOURD * SECONDSD_IN_MINUTED -
      getMinuteD(fractionOfDay) * SECONDSD_IN_MINUTED
  )
}

const getSecondsDinDayD = () => {
  return HOURSD_IN_DAY * MINUTESD_IN_HOURD * SECONDSD_IN_MINUTED
}

function DigitalClock() {
  const currentTime = new Date()
  const [hour, setHour] = useState(currentTime.getHours())
  const [minute, setMinute] = useState(currentTime.getMinutes())
  const [second, setSecond] = useState(currentTime.getSeconds())
  const totalSeconds = second + minute * 60 + hour * 60 * 60
  // convert to a fraction of the day?
  const fractionOfDay = totalSeconds / (60 * 60 * 24)

  const [hourD, setHourD] = useState(getHourD(fractionOfDay))
  const [minuteD, setMinuteD] = useState(getMinuteD(fractionOfDay))
  const [secondD, setSecondD] = useState(getSecondD(fractionOfDay))

  return (
    <div>
      <p>Current hours past midnight: {hour}</p>
      <p>Current minutes past full hour: {minute}</p>
      <p>Current seconds past full minute: {second}</p>
      <br />
      <p>Current hoursD past midnight: {hourD}</p>
      <p>Current minutesD past full hourD: {minuteD}</p>
      <p>Current secondsD past full minuteD: {secondD}</p>
    </div>
  )
}

export default DigitalClock
