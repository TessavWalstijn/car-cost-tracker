import { createEnum } from './core'

export const eEvents = {
  trip: 'trip',
  maintenance: 'maintenance',
  wash: 'wash',
  refill: 'refill',
} as const

export type tEvents = createEnum<typeof eEvents>

export interface iEvent {
  id: string
  type: tEvents
}
