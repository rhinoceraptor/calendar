import React from 'react';
import './MonthDays.css'

export type MonthDaysProps = {
  currentDate: Date,
  setCurrentDate (date: Date): void
}

export const MonthDays = (props: MonthDaysProps) => (
  <div className="month-days" />
)
