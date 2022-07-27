import React from 'react';
import { CurrentMonthBar } from './CurrentMonthBar'
import { WeekDaysBar } from './WeekDaysBar'
import { MonthDays } from './MonthDays'
import './Calendar.css';

export type CalendarProps = {
  currentDate: Date,
  setCurrentDate (date: Date): void
}

export const Calendar = ({ currentDate, setCurrentDate }: CalendarProps) => (
  <div className="calendar-wrapper">
    <CurrentMonthBar currentDate={currentDate} setCurrentDate={setCurrentDate} />
    <WeekDaysBar />
    <MonthDays currentDate={currentDate} setCurrentDate={setCurrentDate} />
  </div>
)
