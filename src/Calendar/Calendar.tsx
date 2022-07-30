import React from 'react'
import { Event } from '../types'
import { NavBar } from './NavBar'
import { WeekDaysBar } from './WeekDaysBar'
import { MonthDays } from './MonthDays'
import './Calendar.css'

export type CalendarProps = {
  currentDate: Date;
  setCurrentDate (date: Date): void;
  events: Array<Event>;
}

export const Calendar = ({ currentDate, setCurrentDate, events }: CalendarProps) => (
  <div className="calendar-wrapper">
    <NavBar
      currentDate={currentDate}
      setCurrentDate={setCurrentDate}
    />
    <WeekDaysBar />
    <MonthDays
      currentDate={currentDate}
      setCurrentDate={setCurrentDate}
      events={events}
    />
  </div>
)
