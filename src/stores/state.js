import { createPinia } from 'pinia'
import { defineStore } from 'pinia'
import { reactive } from "@vue/reactivity";
import { onBeforeMount } from  "vue"
import axios, { Axios } from 'axios';

export const useUserStore = defineStore('loginauth',() => {
  const userData = reactive({
    user: null,
    token: null
  })

  const baseURL = "http://localhost:5173/"

  onBeforeMount(async () => {
    const response = await axios.get(baseURL, {

     })
     .then(res => console.log(data))
  })

})


