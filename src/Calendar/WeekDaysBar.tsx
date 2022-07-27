import React from 'react'
import { getWeekDayNarrowFormat } from '../util/dates'
import './WeekDaysBar.css'

export const WeekDaysBar = () => (
  <div className="week-days-bar">
    {[0, 1, 2, 3, 4, 5, 6, 7].map((_, i) => (
      <div className="week-day" key={i}>
        {getWeekDayNarrowFormat(i)}
      </div>
    ))}
  </div>
)
