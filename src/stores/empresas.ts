import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { EmpresaEdit } from '@/types'

export const useEmpresaStore = defineStore('empresas', () => {
  const empresas = useStorage<EmpresaEdit[]>('empresas', [])

  function agregarEmpresa(obj: EmpresaEdit) {
    empresas.value.push(obj)
  }

  function eliminarEmpresa(id: string) {
    const empresasFiltradas = empresas.value.filter((empresa) => empresa.id !== id)
    empresas.value = empresasFiltradas
  }

  function editarEmpresa(obj: EmpresaEdit) {
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
