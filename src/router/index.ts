import { createMemoryHistory, createRouter, RouterOptions } from 'vue-router'

import { OverView } from '@/views/OverView'
import { AddTrip } from '@/views/AddTrip'
import { AddMaintenance } from '@/views/AddMaintenance'
import { AddWash } from '@/views/AddWash'
import { AddFuel } from '@/views/AddFuel'

const routes: RouterOptions['routes'] = [
  { path: '/add-trip', component: AddTrip },
  { path: '/add-maintenance', component: AddMaintenance },
  { path: '/add-wash', component: AddWash },
  { path: '/add-fuel', component: AddFuel },
  { path: '/', component: OverView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
