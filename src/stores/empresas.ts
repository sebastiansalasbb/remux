import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmpresaStore = defineStore('empresas', () => {
  const empresas = ref([])

  return {
    empresas,
  }
})
