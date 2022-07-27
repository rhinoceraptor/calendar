import { getNumDaysInMonth, getWeekDayNarrowFormat } from './dates'

describe('utils/dates', () => {
  describe('getNumDaysInMonth', () => {
    it('should return 30 days for June 2022', () => {
      expect(getNumDaysInMonth(new Date('2022-06-01T04:00:00.000Z'))).toEqual(30)
    })
  })

  describe('getWeekDayNarrowFormat', () => {
    it('should return the weekday narrow format for each weekday number', () => {
      expect(getWeekDayNarrowFormat(0)).toEqual('S')
      expect(getWeekDayNarrowFormat(1)).toEqual('M')
      expect(getWeekDayNarrowFormat(2)).toEqual('T')
      expect(getWeekDayNarrowFormat(3)).toEqual('W')
      expect(getWeekDayNarrowFormat(4)).toEqual('T')
      expect(getWeekDayNarrowFormat(5)).toEqual('F')
      expect(getWeekDayNarrowFormat(6)).toEqual('S')
    })
  })
})
