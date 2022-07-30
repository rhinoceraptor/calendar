import React, { useState } from 'react'
import { Calendar } from './Calendar/Calendar'
import { generateDummyEvents } from './generate-dummy-events'
import './App.css'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState(generateDummyEvents(new Date()))

  return (
    <div className="app">
      <Calendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        events={events}
      />
    </div>
  )
}

export default App
