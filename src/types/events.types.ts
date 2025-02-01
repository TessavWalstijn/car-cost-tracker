import { createEnum } from './core'

export const eEvents = {
  trip: 'trip',
  maintenance: 'maintenance',
  wash: 'wash',
  fuel: 'fuel',
} as const

export type tEvents = createEnum<typeof eEvents>

export interface iEvent {
  id: string
  type: tEvents
}
