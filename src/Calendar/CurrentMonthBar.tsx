import React from 'react'
import { getYearFormat, getMonthFormat } from '../util/dates'
import './CurrentMonthBar.css'

export type CurrentMonthBarProps = {
  currentDate: Date,
  setCurrentDate (date: Date): void
}

export const CurrentMonthBar = (props: CurrentMonthBarProps) => (
  <div className="current-month-bar">
    {getMonthFormat(props.currentDate)}
    {getYearFormat(props.currentDate)}
  </div>
)
