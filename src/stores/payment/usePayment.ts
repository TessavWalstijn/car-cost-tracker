import { eEvents, iEvent, tEvents } from '@/types/events.types'
import { iPayment } from '@/types/payments.types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePayment = defineStore('usePayment', () => {
  const payments = ref<iPayment[]>([])

  const add = (person: string, date: Date, price: number, event: iEvent) => {
    // save all data
    payments.value.push({
      person,
      date,
      price,
      event,
      ratio: 0.5,
    })
  }

  const getAll = () => {}

  return { add }
})
