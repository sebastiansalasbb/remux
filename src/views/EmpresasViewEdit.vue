<script setup lang="ts">
import { useEmpresaStore } from '@/stores/empresas'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: String,
})

const router = useRouter()

const volver = () => {
  router.go(-1)
}

const showSuccess = ref(false)

const formState = reactive({
  id: '',
  razonSocial: '',
  rutEmpresa: '',
  nombreRepresentante: '',
  rutRepresentante: '',
  domicilioEmpresaCalle: '',
  domicilioEmpresaComuna: '',
  domicilioEmpresaCiudad: '',
  emailEmpresa: '',
})

const store = useEmpresaStore()
const { empresas } = storeToRefs(store)
const { editarEmpresa } = store

const empresaFiltrada = () => {
  const empresaArray = empresas.value.filter((empresa) => empresa.id === props.id)

  const empresa = empresaArray[0]

  formState.id = empresa.id
  formState.razonSocial = empresa.razonSocial
  formState.rutEmpresa = empresa.rutEmpresa
  formState.nombreRepresentante = empresa.nombreRepresentante
  formState.rutRepresentante = empresa.rutRepresentante
  formState.domicilioEmpresaCalle = empresa.domicilioEmpresaCalle
  formState.domicilioEmpresaComuna = empresa.domicilioEmpresaComuna
  formState.domicilioEmpresaCiudad = empresa.domicilioEmpresaCiudad
  formState.emailEmpresa = empresa.emailEmpresa
}
empresaFiltrada()

const onSubmit = () => {
  editarEmpresa(formState)
  showSuccess.value = true

  setTimeout(() => {
    showSuccess.value = false
  }, 1900)
}
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center">Editar Empresa</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="razonSocial"
          placeholder="nombre empresa"
          v-model="formState.razonSocial"
          required
        />
        <label for="razonSocial">Razón Social</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="rutEmpresa"
          placeholder="77777777-7"
          v-model="formState.rutEmpresa"
          required
        />
        <label for="rutEmpresa">Rut Empresa</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nombreRepresentante"
          placeholder="Juan perez perez"
          v-model="formState.nombreRepresentante"
          required
        />
        <label for="nombreRepresentante">Nombre Representante Legal</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="rutRepresentante"
          placeholder="15555555-5"
          v-model="formState.rutRepresentante"
          required
        />
        <label for="rutRepresentante">Run Representante Legal</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="domimicilioEmpresa"
          placeholder="domimicilioEmpresa"
          v-model="formState.domicilioEmpresaCalle"
          required
        />
        <label for="domimicilioEmpresa">Domicilio Empresa (calle, numero, oficina)</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="domimicilioEmpresaComuna"
          placeholder="domimicilioEmpresaComuna"
          v-model="formState.domicilioEmpresaComuna"
          required
        />
        <label for="domimicilioEmpresaComuna">Domicilio Empresa (comuna)</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="domimicilioEmpresaCiudad"
          placeholder="domimicilioEmpresaCiudad"
          v-model="formState.domicilioEmpresaCiudad"
          required
        />
        <label for="domimicilioEmpresaCiudad">Domicilio Empresa (Ciudad)</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="emailEmpresa"
          placeholder="emailEmpresa"
          v-model="formState.emailEmpresa"
          required
        />
        <label for="emailEmpresa">Email Empresa</label>
      </div>

      <div v-show="showSuccess === true" class="alert alert-success" role="alert">
        Empresa editada exitosamente!
      </div>

      <div class="modal-footer">
        <button @click="volver" type="button" class="btn btn-secondary">Volver</button>
        <button type="submit" class="btn btn-primary">Editar</button>
      </div>
    </form>
  </div>
</template>
