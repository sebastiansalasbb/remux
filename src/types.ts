export type EmpresaCreate = {
  razonSocial: string
  rutEmpresa: string
  nombreRepresentante: string
  rutRepresentante: string
  domicilioEmpresaCalle: string
  domicilioEmpresaComuna: string
  domicilioEmpresaCiudad: string
  emailEmpresa: string
}

export type EmpresaEdit = EmpresaCreate & { id: string }
