import React from 'react'
import { getDatesForCurrentMonthView } from '../util/dates'
import './MonthDays.css'

export type MonthDaysProps = {
  currentDate: Date,
  setCurrentDate (date: Date): void
}

export const MonthDays = ({ currentDate, setCurrentDate }: MonthDaysProps) => {
  return (
    <div className="month-days">
      {getDatesForCurrentMonthView(currentDate).map(date => (
        <div className="day" onClick={() => setCurrentDate(date)}>
          {date.getDate()}
        </div>
      ))}
    </div>
  )
}
