import React, { useState } from 'react'
import { Calendar } from './Calendar/Calendar'
import './App.css'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <div className="app">
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </div>
  )
}

export default App
