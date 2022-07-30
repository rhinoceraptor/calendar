import React from 'react'
import { Event } from '../types'
import { isSameDay } from '../util/dates'
import './EventsView.css'

export type EventsViewProps = {
  currentDate: Date;
  events: Array<Event>;
}

export const EventsView = ({ currentDate, events }: EventsViewProps) => (
  <div className="events-view">
    {events
      .filter(event => isSameDay(event.startDate, currentDate))
      .sort((a, b) => b.startDate.getHours() - a.startDate.getHours())
      .map(event => (
        <div className="event" key={event.name + event.startDate.toString()}>
          <span className="name">{event.name}</span>
          <span className="description">{event.description}</span>
        </div>
      ))
    }
  </div>
)

