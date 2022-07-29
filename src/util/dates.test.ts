import {
  getNumDaysInMonth,
  getWeekDayNarrowFormat,
  getYearFormat,
  getMonthFormat,
  getDatesForCurrentMonthView
} from './dates'

describe('utils/dates', () => {
  describe('getNumDaysInMonth', () => {
    const cases = [
      [31, '2022-01-01T10:00:00.000Z'],
      [28, '2022-02-01T10:00:00.000Z'],
      [31, '2022-03-01T10:00:00.000Z'],
      [30, '2022-04-01T10:00:00.000Z'],
      [31, '2022-05-01T10:00:00.000Z'],
      [30, '2022-06-01T10:00:00.000Z'],
      [31, '2022-07-01T10:00:00.000Z'],
      [31, '2022-08-01T10:00:00.000Z'],
      [30, '2022-09-01T10:00:00.000Z'],
      [31, '2022-10-01T10:00:00.000Z'],
      [30, '2022-11-01T10:00:00.000Z'],
      [31, '2022-12-01T10:00:00.000Z']
    ]

    it.each(cases)('should return %p for %p', (numberOfDays, dateString) => {
      expect(getNumDaysInMonth(new Date(dateString))).toEqual(numberOfDays)
    })
  })

  describe('getWeekDayNarrowFormat', () => {
    const cases = [
      ['S', 0],
      ['M', 1],
      ['T', 2],
      ['W', 3],
      ['T', 4],
      ['F', 5],
      ['S', 6]
    ]

    it.each(cases)('should return %p for %p', (weekDay, weekDayNumber) => {
      expect(getWeekDayNarrowFormat(weekDayNumber as number)).toEqual(weekDay)
    })
  })

  describe('getYearFormat', () => {
    const cases = [
      ['2018', '2018-06-01T04:00:00.000Z'],
      ['2019', '2019-06-01T04:00:00.000Z'],
      ['2020', '2020-06-01T04:00:00.000Z'],
      ['2021', '2021-06-01T04:00:00.000Z'],
      ['2022', '2022-06-01T04:00:00.000Z'],
      ['2023', '2023-06-01T04:00:00.000Z'],
      ['2024', '2024-06-01T04:00:00.000Z'],
      ['2025', '2025-06-01T04:00:00.000Z'],
    ]
    it.each(cases)('should return %p for %p', (year, dateString) => {
      expect(getYearFormat(new Date(dateString))).toEqual(year)
    })
  })

  describe('getMonthFormat', () => {
    const cases = [
      ['January', '2022-01-01T10:00:00.000Z'],
      ['February', '2022-02-01T10:00:00.000Z'],
      ['March', '2022-03-01T10:00:00.000Z'],
      ['April', '2022-04-01T10:00:00.000Z'],
      ['May', '2022-05-01T10:00:00.000Z'],
      ['June', '2022-06-01T10:00:00.000Z'],
      ['July', '2022-07-01T10:00:00.000Z'],
      ['August', '2022-08-01T10:00:00.000Z'],
      ['September', '2022-09-01T10:00:00.000Z'],
      ['October', '2022-10-01T10:00:00.000Z'],
      ['November', '2022-11-01T10:00:00.000Z'],
      ['December', '2022-12-01T10:00:00.000Z']
    ]

    it.each(cases)('should return %p for %p', (monthName, dateString) => {
      expect(getMonthFormat(new Date(dateString))).toEqual(monthName)
    })
  })

  describe('getDatesForCurrentMonthView', () => {
    it.only('should return every date in view for the current month', () => {
      console.log(getDatesForCurrentMonthView(new Date('2022-07-03T10:00:00.000Z')))
    })
  })
})
