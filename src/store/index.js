import axios from 'axios'

import { createStore } from 'vuex'
import  contacts  from "./modules/contacts";


export default createStore({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // getters: {
  // },
      modules: {
    contacts
  }
})
