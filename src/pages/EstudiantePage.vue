<template>
  <q-page class="">
    <h4>Estudiante</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et saepe corporis eos adipisci? Quam ipsa dolorem fugiat. Eius vel eum ipsam blanditiis dolore commodi doloremque necessitatibus atque totam nesciunt!</p>
    <h3 class="q-ml-lg">{{ contador }}</h3>
    <h3 class="q-ml-lg">{{ contador2 }}</h3>
    <q-btn class="q-ml-xl" @click="aumentar" label="Incrementar" color="primary" icon="add" ></q-btn>
    <q-btn class="q-ml-xl" @click="aumentar2" label="Incrementar 2" color="primary" icon="add" ></q-btn>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const contador = ref(0)
let contador2 = 0

function aumentar () {
  contador.value++
}

function aumentar2 () {
  contador2++
}

</script>

<style scoped>

</style>
