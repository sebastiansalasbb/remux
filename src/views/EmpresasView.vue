<script setup lang="ts">
import EditPencil from '@/components/icons/EditPencil.vue'
import Trash3Delete from '@/components/icons/Trash3Delete.vue'
import { useEmpresaStore } from '@/stores/empresas'
import type { EmpresaCreate } from '@/types'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const store = useEmpresaStore()
const { empresas } = storeToRefs(store)
const { agregarEmpresa, eliminarEmpresa } = store

const formState = reactive<EmpresaCreate>({
  razonSocial: '',
  rutEmpresa: '',
  nombreRepresentante: '',
  rutRepresentante: '',
  domicilioEmpresaCalle: '',
  domicilioEmpresaComuna: '',
  domicilioEmpresaCiudad: '',
  emailEmpresa: '',
})

const showSuccess = ref<boolean>(false)
const empresaBorrada = ref<boolean>(false)

const idDelete = ref<string>('')

const guardarIDEmpresa = (id: string): void => {
  idDelete.value = id
}

const deleteEmpresa = (): void => {
  eliminarEmpresa(idDelete.value)
  empresaBorrada.value = true
}

const resetearEstadoEmpresaBorrada = (): void => {
  empresaBorrada.value = false
}

const onSubmit = (): void => {
  const objEmpresa = { id: crypto.randomUUID(), ...formState }
  agregarEmpresa(objEmpresa)

  formState.razonSocial = ''
  formState.rutEmpresa = ''
  formState.nombreRepresentante = ''
  formState.rutRepresentante = ''
  formState.domicilioEmpresaCalle = ''
  formState.domicilioEmpresaComuna = ''
  formState.domicilioEmpresaCiudad = ''
  formState.emailEmpresa = ''

  showSuccess.value = true

  setTimeout(() => {
    showSuccess.value = false
  }, 2500)
}
</script>

<template>
  <div class="container py-5">
    <h2>Empresas</h2>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Registrar Empresa
      </button>
    </div>

    <table v-if="empresas.length > 0" class="table table-hover mt-5">
      <thead>
        <tr>
          <th scope="col">Rut</th>
          <th scope="col">Razón Social</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="value in empresas" :key="value.id">
          <th scope="row">{{ value.rutEmpresa }}</th>
          <td>{{ value.razonSocial }}</td>
          <td>
            <RouterLink :to="`/empresas/${value.id}`"><EditPencil /></RouterLink>
          </td>
          <td>
            <!-- Button trigger modal -->
            <Trash3Delete
              data-bs-toggle="modal"
              data-bs-target="#modalDelete"
              @click="guardarIDEmpresa(value.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Modal Form -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Registrar Empresa</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
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
              Empresa guardada exitosamente!
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Delete-->
  <div
    class="modal fade"
    id="modalDelete"
    tabindex="-1"
    aria-labelledby="modalDeleteLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalDeleteLabel">Eliminar Empresa</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="resetearEstadoEmpresaBorrada"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="empresaBorrada === false" class="alert alert-danger" role="alert">
            Al eliminar una empresa perderás todos los datos y también el de los trabajadores!
          </div>
          <div v-else class="alert alert-success" role="alert">Has borrado todos los datos</div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="resetearEstadoEmpresaBorrada"
          >
            Close
          </button>
          <button
            v-if="empresaBorrada === false"
            @click="deleteEmpresa"
            type="button"
            class="btn btn-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
