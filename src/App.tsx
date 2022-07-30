import React, { useState } from 'react'
import { Calendar } from './Calendar/Calendar'
import { EventsView } from './EventsView/EventsView'
import { generateDummyEvents } from './util/generate-dummy-events'
import './App.css'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events /**, setEvents */] = useState(generateDummyEvents(new Date()))

  return (
    <div className="app">
      <Calendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        events={events}
      />
      <EventsView
        currentDate={currentDate}
        events={events}
      />
    </div>
  )
}

export default App
