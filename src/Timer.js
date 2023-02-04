import React from 'react'
// import './timer.css'
import { useState, useEffect } from 'react'
import SetMin from './SetTime'

const Timer = () => {
  const [seconds, setSeconds] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [isActive, setIsActive] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // exit early when we reach 0
    if (!counter) return

    if (isActive) {
      const intervalId = setInterval(() => {
        setCounter(counter - 1)
      }, 1000)
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId)
    }
  }, [counter, isActive])

  useEffect(() => {
    const secondCounter = counter % 60
    const minuteCounter = Math.floor(counter/ 60)
    setSeconds(String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter)
    setMinutes(String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter)
  }, [counter])

  const increaseMin = () => {
    setCounter(counter + 60)
    setIsActive(false)
  }

  const decreaseMin = () => {
    setCounter(counter - 60)
    setIsActive(false)
  }

  const increaseSec = () => {
    setCounter(counter + 15)
    setIsActive(false)
  }
  
  const decreaseSec = () => {
    setCounter(counter - 15)
    setIsActive(false)
  }

  return (
    <div className='container'>
      <div className='time'>
        <span className='minutes'>{minutes}</span>
        <span>:</span>
        <span className='seconds'>{seconds}</span>
      </div>
      <div className='buttons'>
        <button onClick={() => setIsActive(!isActive)} className='start'>{isActive ? "Pause" : "Start"}</button>
        <button onClick={() => null} className='reset'>Reset</button>
      </div>
      <div className='setTime'>
        <SetMin label="Minutes" increase={increaseMin} decrease={decreaseMin} curr={minutes} />
        <SetMin label="Seconds" increase={increaseSec} decrease={decreaseSec} curr={seconds} />
      </div>
    </div>
  )
}

export default Timer