import React from 'react'
import { getYearFormat, getMonthFormat, getFirstDayOfPreviousMonth, getFirstDayOfNextMonth } from '../util/dates'
import './CurrentMonthBar.css'

export type CurrentMonthBarProps = {
  currentDate: Date,
  setCurrentDate (date: Date): void
}

export const CurrentMonthBar = ({ setCurrentDate, currentDate }: CurrentMonthBarProps) => (
  <div className="current-month-bar">
    <span className="month">{getMonthFormat(currentDate)}</span>
    <span className="year">{getYearFormat(currentDate)}</span>
    <span className="prev" onClick={() => setCurrentDate(getFirstDayOfPreviousMonth(currentDate))}>⬅️</span>
    <span className="next" onClick={() => setCurrentDate(getFirstDayOfNextMonth(currentDate))}>➡️</span>
  </div>
)
