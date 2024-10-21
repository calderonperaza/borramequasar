<template>
  <div>
    <q-btn
      color="primary"
      label="Generar datos"
      @click="generarAleatorio"
    />
  </div>
</template>

<script setup>

const materia = {
  _id: 'ABCERT',
  docente: 'ernesto.calderon@ues.edu.sv',
  docenteNombre: 'Ernesto Alexander Calderon Peraza',
  anho: 2024,
  materia: 'Fundamentos de Programación en Internet',
  grupo: '1',
  habilitarMarcar: true,
  marcaciones: []
}

/*
const marcacion = {
  fecha: '2024-11-30',
  asistencia: [
    {
      carnet: 'AR08025',
      nombreCompleto: 'Mario Arce Ramos',
      fecha: '2020-05-21T17:27:59.535Z'
    },
    {
      carnet: 'TR08025',
      nombreCompleto: 'Maria Torres Rivera',
      fecha: '2020-05-21T17:27:59.535Z'
    }
  ]
} */

function generarAleatorio () {
  // vamos a tomar el objeto materia y le iremos agregando marcaciones con diferentes fechas del año
  // GENERAMOS 50 MARCACIONES
  for (let i = 0; i < 50; i++) {
    const fecha = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 30))
    const marcacion = {
      // fecha: fecha.toISOString(),
      // fecha en el formato '2024-11-30' concatenando año-mes-dia
      fecha: fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate(),
      asistencia: []
    }
    // GENERAMOS 100 ASISTENCIAS POR MARCACION
    for (let j = 0; j < 100; j++) {
      const carnet = 'AM' + Math.floor(Math.random() * 100).toString().padStart(2, '0') + Math.floor(Math.random() * 1000).toString().padStart(3, '0')
      const nombreCompleto = 'Nombre Completo Estudiante Universitario ' + Math.floor(Math.random() * 100)
      const asistencia = {
        carnet,
        nombreCompleto,
        fecha: new Date(fecha)
      }
      asistencia.fecha.setHours(Math.floor(Math.random() * 24))
      asistencia.fecha.setMinutes(Math.floor(Math.random() * 60))
      asistencia.fecha.setSeconds(Math.floor(Math.random() * 60))
      marcacion.asistencia.push(asistencia)
    }
    materia.marcaciones.push(marcacion)
  }

  // console.log(materia)
  // vamos a descargar el archivo json materia
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(materia))
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', 'materia.json')
  document.body.appendChild(downloadAnchorNode) // required for firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}

</script>
