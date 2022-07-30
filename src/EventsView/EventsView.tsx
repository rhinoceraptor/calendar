import React from 'react'
import { Event } from '../types'
import './EventsView.css'

export type EventsViewProps = {
  currentDate: Date;
  events: Array<Event>;
}

export const EventsView = ({ currentDate, events }: EventsViewProps) => (
  <div className="events-view">
  </div>
)

