import React from 'react'
import { Event } from '../types'
import { isSameDay, formatDateTime } from '../util/dates'
import './EventsView.css'

export type EventsViewProps = {
  currentDate: Date;
  events: Array<Event>;
}

export const EventsView = ({ currentDate, events }: EventsViewProps) => (
  <div className="events-view">
    {events
      .filter(event => isSameDay(event.startDate, currentDate))
      .sort((a, b) => a.startDate.getHours() - b.startDate.getHours())
      .map((event, i) => (
        <div className="event" key={event.name + event.startDate.toString() + i}>
          <span className="name">{event.name}</span>
          <span className="time">
            {!event.endDate
              ? ' All Day'
              : ` ${formatDateTime(event.startDate)} to ${formatDateTime(event.endDate)}`
            }
          </span>
          <span className="description">{event.description}</span>
        </div>
      ))
    }
  </div>
)

