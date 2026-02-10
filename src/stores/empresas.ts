import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useEmpresaStore = defineStore('empresas', () => {
  const empresas = useStorage('empresas', [])

  function agregarEmpresa(obj) {
    empresas.value.push(obj)
  }

  function eliminarEmpresa(id) {
    const empresasFiltradas = empresas.value.filter((empresa) => empresa.id !== id)
    empresas.value = empresasFiltradas
  }

  function editarEmpresa(obj) {
    console.log(obj.id)

    const listaEmpresasModificada = empresas.value.map((empresa) => {
      if (empresa.id === obj.id) {
        return obj
      } else {
        return empresa
      }
    })

    empresas.value = listaEmpresasModificada
  }

  return {
    empresas,
    agregarEmpresa,
    eliminarEmpresa,
    editarEmpresa,
  }
})
