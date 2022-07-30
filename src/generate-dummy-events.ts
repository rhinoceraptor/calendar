import { faker } from '@faker-js/faker'
import { Event } from './types'
import { getFirstDayOfPreviousMonth, getFirstDayOfNextMonth } from './util/dates'

const getEvent = (): { name: string, description: string, lengthMinutes: number } => faker.helpers.arrayElement([{
  name: `1 on 1 with ${faker.name.findName()}`,
  description: '1 on 1 Meeting',
  lengthMinutes: 30
}, {
  name: `Chat with ${faker.name.findName()}`,
  description: 'Level setting meeting',
  lengthMinutes: 20
}, {
  name: `Team Meeting`,
  description: 'Review OKRs and project progress',
  lengthMinutes: 60
}, {
  name: `Sprint Retro`,
  description: 'Review our outstanding Jira tickets and sprint completion',
  lengthMinutes: 60
}, {
  name: `Sprint Planning`,
  description: 'Estimate tasks in the backlog',
  lengthMinutes: 60
}])


export const generateDummyEvents = (date: Date): Array<Event> => {
  const start = getFirstDayOfPreviousMonth(getFirstDayOfPreviousMonth(date))
  const end = getFirstDayOfNextMonth(getFirstDayOfNextMonth(date))

  const numDays = (end.getTime() - start.getTime()) / (1000*60*60*24)

  return new Array(Math.floor(numDays / 2)).fill('').map(() => {
    const { name, description, lengthMinutes } = getEvent()

    const eventDate = faker.date.between(start, end)

    // Choose a starting time on the hour between 8 AM and 5 PM
    const startDate = new Date(faker.date.between(
      new Date(eventDate).setHours(8, 0, 0),
      new Date(eventDate).setHours(17, 0, 0)
    ).setMinutes(0, 0, 0))

    return {
      name,
      description,
      startDate,
      endDate: new Date(new Date(startDate).setMinutes(lengthMinutes))
    }
  })
}

