
export const getNumDaysInMonth = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

export const getWeekDayNarrowFormat = (weekday: number): string => {
  const now = new Date()
  now.setDate(now.getDate() + (weekday - now.getDay()))
  return now.toLocaleString('default', { weekday: 'narrow' })
}

export const getYearFormat = (date: Date): string =>
  date.getFullYear().toString()

export const getMonthFormat = (date: Date): string =>
  date.toLocaleString('default', { month: 'long' })
