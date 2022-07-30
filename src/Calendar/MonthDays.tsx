import React from 'react'
import { Event } from '../types'
import { getDatesForCurrentMonthView, isSameDay, isSameMonth } from '../util/dates'
import './MonthDays.css'

export type MonthDaysProps = {
  currentDate: Date;
  setCurrentDate (date: Date): void;
  events: Array<Event>;
}

export const MonthDays = ({ currentDate, setCurrentDate, events }: MonthDaysProps) => {
  const getDayClassName = (date: Date, i: number): string => [
    'day',
    isSameDay(currentDate, date) ? 'now' : '',
    isSameMonth(currentDate, date) ? '' : 'not-current-month',
    events.some(event => isSameDay(event.startDate, date)) ? 'has-event' : ''
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
