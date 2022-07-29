
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

export const getFirstWeekdayOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), 1)

export const getLastWeekdayOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0)

export const subtractNumDays = (numDays: number, date: Date, log = false): Date =>
  new Date(new Date(date).setDate(date.getDate() - numDays))

export const addNumDays = (numDays: number, date: Date, log = false): Date =>
  new Date(new Date(date).setDate(date.getDate() + numDays))

export const getDatesForCurrentMonthView = (date: Date): Array<Date> => {
  const firstVisibleDay = subtractNumDays(getFirstWeekdayOfMonth(date).getDay(), getFirstWeekdayOfMonth(date))
  return new Array(7 * 6).fill('').map((_, i) => addNumDays(i, firstVisibleDay))
}

export const getFirstDayOfPreviousMonth = (date: Date): Date => {
  return getFirstWeekdayOfMonth(subtractNumDays(1, getFirstWeekdayOfMonth(date)))
}

export const getFirstDayOfNextMonth = (date: Date): Date => {
  return addNumDays(1, getLastWeekdayOfMonth(date))
}

export const isSameMonth = (date1: Date, date2: Date): boolean =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth()

export const isSameDay = (date1: Date, date2: Date): boolean =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();
