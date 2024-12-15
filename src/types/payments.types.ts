import { iEvent } from './events.types'

export interface iPayment {
  person: string
  date: Date
  price: number
  event: iEvent
  ratio: number
}
