import React from 'react'
import { getYearFormat, getMonthFormat, getFirstDayOfPreviousMonth, getFirstDayOfNextMonth } from '../util/dates'
import './NavBar.css'

export type NavBarProps = {
  currentDate: Date;
  setCurrentDate (date: Date): void;
}

export const NavBar = ({ setCurrentDate, currentDate }: NavBarProps) => (
  <div className="current-month-bar">
    <button onClick={() => setCurrentDate(new Date())}>Today</button>
    <span className="date">
      <span className="month">{getMonthFormat(currentDate)}</span>
      <span className="year">{getYearFormat(currentDate)}</span>
    </span>
    <div className="navigation">
      <span className="prev" onClick={() => setCurrentDate(getFirstDayOfPreviousMonth(currentDate))}>‹</span>
      <span className="next" onClick={() => setCurrentDate(getFirstDayOfNextMonth(currentDate))}>›</span>
    </div>
  </div>
)
