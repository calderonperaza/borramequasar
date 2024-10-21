<template>
  <q-page class="">
    <div class="row justify-center">
      <div class="col-4">
        <q-input filled  v-model="nombre" label="Nombre" placeholder="Ej: juan Alberto"
        :rules="[val => !!val || 'El nombre es requerido' , val => val.length <= 3 || 'Please use maximum 3 characters']"
        >
          <template v-slot:prepend>
          <q-icon name="event" />
        </template>
        </q-input>
        <q-spinner-audio
          color="primary"
          size="lg"
          v-show="cargando"
        />
        <q-btn
          color="primary"
          label="Cargar datos"
          @click="cargarDatos"

        />
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <q-list v-if="personas.length>0">
          <q-item v-for="(item, key) in personas" :key="key">
        <q-item-section top avatar>
          <q-avatar>
            <img :src="item.picture.medium">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{item.email}}</q-item-label>
          <q-item-label caption>{{item.name.first + item.name.last}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="10k" />
        </q-item-section>
      </q-item>
        </q-list>
      </div>
    </div>
</q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const cargando = ref(false)
const personas = ref([])
const nombre = ref('')

function cargarDatos () {
  cargando.value = true
  // cargando los datos
  axios.get('https://randomuser.me/api/?results=10')
    .then(function (response) {
    // handle success
      console.log(response)
      personas.value = response.data.results
      cargando.value = false
    })
    .catch(function (error) {
    // handle error
      console.log(error)
      cargando.value = false
    })
}

</script>
