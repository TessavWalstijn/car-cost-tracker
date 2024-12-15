import { defineStore } from 'pinia'

export const useWash = defineStore('useWash', () => {
  const addCleaning = (date: Date, cost: number) => {
    // Save cleaning date
    // Remove cost from credit if existed
    // Add payment date if credit is not there
  }

  const addWashCredit = (date: Date, cost: number) => {
    // Add payment date
    // Add to cleaning credit
  }

  export { addCleaning }
})
