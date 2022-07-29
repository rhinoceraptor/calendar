import React from 'react'
import { getDatesForCurrentMonthView, isSameDay, isSameMonth } from '../util/dates'
import './MonthDays.css'

export type MonthDaysProps = {
  currentDate: Date,
  setCurrentDate (date: Date): void
}

export const MonthDays = ({ currentDate, setCurrentDate }: MonthDaysProps) => {
  const getDayClassName = (date: Date, i: number): string => [
    'day',
    isSameDay(currentDate, date) ? 'now' : '',
    isSameMonth(currentDate, date) ? '' : 'not-current-month',
    // TODO change when events are added
    i % 2 === 0 ? 'has-event' : ''
  ].join(' ')

  return (
    <div className="month-days">
      {getDatesForCurrentMonthView(currentDate).map((date, i) => (
        <div
          className={getDayClassName(date, i)}
          onClick={() => setCurrentDate(date)}
          key={date.toString()}
        >
          {date.getDate()}
        </div>
      ))}
    </div>
  )
}
