
export type EventType =
  'meeting' |
  'birthday' |
  'appointment' |
  'holiday'

export type Event = {
  name: string;
  description: string;
  type: EventType;
  startDate: Date;
  endDate?: Date;
  allDayEvent?: boolean;
}
