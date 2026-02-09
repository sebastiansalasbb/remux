<script setup lang="ts">
import { useEmpresaStore } from '@/stores/empresas'
import { storeToRefs } from 'pinia'

const store = useEmpresaStore()
const { empresas } = storeToRefs(store)
</script>

<template>
  <div class="container py-5">
    <h2>Empresas</h2>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Registrar Empresa
      </button>
    </div>

    <form>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="razonSocial" placeholder="name@example.com" />
        <label for="razonSocial">Razón Social</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="rutEmpresa" placeholder="Password" />
        <label for="rutEmpresa">Rut Empresa</label>
      </div>
    </form>

    <!-- Modal -->
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
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <table v-if="empresas.length > 0" class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
