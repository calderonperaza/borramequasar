// archivo donde tenemos la funcion de marcacion de un estudiante

/*
function marcarasistencia (doc, req) {
  if (doc) {
    if (!doc.habilitarMarcar || doc.habilitarMarcar === false) {
      return [null, 'HABILITARMARCARFALSE']
    }
    if (!doc.marcaciones) {
      return [null, 'ERRORMARCACIONES']
    }
    const datos = JSON.parse(req.body)
    if (!datos.carnet) {
      return [null, 'ERRORCARNET']
    }
    if (!datos.nombreCompleto) {
      return [null, 'ERRORNOMBRECOMPLETO']
    }
    datos.fecha = new Date()
    const fecha = new Date()
    // cambiamos la fecha a texto en formato yyyy-mm-dd rellenando con ceros mes y dia
    const fechaTexto = fecha.getFullYear() + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2) + '-' + ('0' + fecha.getDate()).slice(-2)
    // buscamos en el arreglo de marcaciones si tenemos un objeto con la fecha actual
    const haymarcacion = doc.marcaciones.find(marcacion => marcacion.fecha === fechaTexto)
    if (!haymarcacion) {
      // agregamos la marcacion y el estudiante
      doc.marcaciones.push({ fecha: fechaTexto, asistencia: [datos] })
      return [doc, 'MARCACIONEXITOSA']
    } else {
      // tenemos que buscar la fecha en el arreglo marcaciones y luego buscar el estudiante
      for (let i = 0; i < doc.marcaciones.length; i++) {
        if (doc.marcaciones[i].fecha === fechaTexto) {
          const estudiante = doc.marcaciones[i].asistencia.find(est => est.carnet === datos.carnet)
          if (estudiante) {
            // console.log('estudiante existe')
            return [null, 'ESTUDIANTEEXISTEMARCADO']
          } else {
            // console.log('MARCACIONEXITOSA')
            doc.marcaciones[i].asistencia.push(datos)
            return [doc, 'MARCACIONEXITOSA']
          }
        }
      }
    }// fin else
  }
  return [null, 'NOEXISTEGRUPO']
}

const habilitar =
function (doc, req) {
  if (doc) {
    doc.habilitarMarcar = true
    return [doc, 'HABILITADO']
  } else {
    return [null, 'NOEXISTEGRUPO']
  }
}

const documento = {
  docente: 'ernesto.calderon@ues.edu.sv',
  docenteNombre: 'Ernesto Alexander Calderon Peraza',
  anho: 2024,
  materia: 'Diseno de Sistemas II',
  grupo: 'Grupo: 1',
  habilitarMarcar: true,
  marcaciones: [
    {
      fecha: '2024-10-09',
      asistencia: [
        {
          carnet: 'AM80018',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 84',
          fecha: '2024-11-30T22:12:00.000Z'
        },
        {
          carnet: 'AM25454',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 83',
          fecha: '2024-11-30T09:52:23.000Z'
        },
        {
          carnet: 'AM17713',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 92',
          fecha: '2024-11-30T17:23:30.000Z'
        },
        {
          carnet: 'AM38056',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 95',
          fecha: '2024-11-30T21:40:00.000Z'
        },
        {
          carnet: 'AM69501',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 59',
          fecha: '2024-11-30T11:02:16.000Z'
        },
        {
          carnet: 'AM78294',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 22',
          fecha: '2024-12-01T01:07:21.000Z'
        },
        {
          carnet: 'AM55663',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 51',
          fecha: '2024-11-30T13:02:35.000Z'
        },
        {
          carnet: 'AM55415',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 91',
          fecha: '2024-11-30T14:19:00.000Z'
        },
        {
          carnet: 'AM96493',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 22',
          fecha: '2024-12-01T04:38:47.000Z'
        },
        {
          carnet: 'AM17880',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 81',
          fecha: '2024-12-01T03:56:05.000Z'
        },
        {
          carnet: 'AM34340',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 60',
          fecha: '2024-11-30T21:20:46.000Z'
        },
        {
          carnet: 'AM56688',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 23',
          fecha: '2024-11-30T16:41:57.000Z'
        },
        {
          carnet: 'AM82556',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 70',
          fecha: '2024-11-30T10:48:33.000Z'
        },
        {
          carnet: 'AM89605',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 84',
          fecha: '2024-12-01T00:02:57.000Z'
        },
        {
          carnet: 'AM16706',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 67',
          fecha: '2024-11-30T13:36:59.000Z'
        },
        {
          carnet: 'AM68140',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 53',
          fecha: '2024-11-30T14:29:24.000Z'
        },
        {
          carnet: 'AM91925',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 63',
          fecha: '2024-11-30T15:51:01.000Z'
        },
        {
          carnet: 'AM01275',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 59',
          fecha: '2024-11-30T14:40:51.000Z'
        },
        {
          carnet: 'AM56399',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 70',
          fecha: '2024-11-30T09:54:29.000Z'
        },
        {
          carnet: 'AM45657',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 61',
          fecha: '2024-11-30T15:47:33.000Z'
        },
        {
          carnet: 'AM84000',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 47',
          fecha: '2024-11-30T21:08:10.000Z'
        },
        {
          carnet: 'AM97446',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 10',
          fecha: '2024-11-30T14:12:45.000Z'
        },
        {
          carnet: 'AM09047',
          nombreCompleto: 'Nombre Completo Estudiante Universitario 85',
          fecha: '2024-11-30T17:01:52.000Z'
        }
      ]
    }
  ]
}
habilitar(documento, { body: '' })
// marcarasistencia(documento, { body: '{"carnet":"AM14813", "nombreCompleto":"NOmbre completo estudiante"}' })
*/
